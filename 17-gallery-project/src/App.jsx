import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const isFetching = useRef(false);
  const indexRef = useRef(1);

  const handleScroll = () => {
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100;

    if (reachedBottom && !isFetching.current && !search.trim()) {
      isFetching.current = true;
      indexRef.current += 1;
      setIndex(indexRef.current);
    }
  };

  const getData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`,
      );

      setUserData((prevData) => {
        const uniqueImages = new Map();

        [...prevData, ...data].forEach((user) => {
          uniqueImages.set(user.id, user);
        });

        return [...uniqueImages.values()];
      });
    } catch (error) {
      console.log(error);
    } finally {
      isFetching.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="flex justify-between items-center gap-4">
        <h1 className="mb-5 text-2xl font-bold">
          Image{" "}
          <span className="text-yellow-300 font-extrabold uppercase ">
            Gallery
          </span>
        </h1>
        <input
          type="search"
          name=""
          id=""
          placeholder="Seach author..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
          className="w-64 rounded-lg bg-white px-4 py-2 text-black outline-none"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-4 py-2">
        {userData
          .filter((user) =>
            user.author.toLowerCase().includes(search.trim().toLowerCase()),
          )
          .map((user) => (
            <Card key={`${user.id}-${search}`} props={user} />
          ))}
      </div>

      {loading && (
        <h3 className="py-4 text-center text-gray-400">
          Loading more images...
        </h3>
      )}

      {/* <div className="mt-5 flex justify-center gap-4">
        <button
          onClick={() => {
            if (index > 1 && !isFetching.current) {
              indexRef.current = index - 1;
              setIndex(indexRef.current);
            }
          }}
          className="cursor-pointer rounded bg-amber-400 px-4 py-2 text-sm font-bold text-black active:scale-95"
        >
          Prev
        </button>

        <h1 className="text-2xl">{index}</h1>

        <button
          onClick={() => {
            if (!isFetching.current) {
              indexRef.current = index + 1;
              setIndex(indexRef.current);
            }
          }}
          className="cursor-pointer rounded bg-amber-400 px-4 py-2 text-sm font-bold text-black active:scale-95"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default App;
