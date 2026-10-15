import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const [errors, setErrors] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    if (!name.trim() || !detail.trim()) {
      setErrors(true);
      return;
    }
    setErrors(false);

    const copyTask = [...task];
    copyTask.push({
      id:Date.now(),
      name, detail });
    setTask(copyTask);

    setName("");
    setDetail("");
  };
  const deleteBtn=(id)=>{
    const updatedTask=task.filter((note)=> note.id !==id);
    setTask(updatedTask);
  }
  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 p-10"
      >
        <h1 className="text-3xl font-black">Add Notes:</h1>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter Note Heading"
          className={`w-full rounded border-2 px-5 py-2 font-medium outline-none ${
            errors && !name.trim() ? "border-red-500" : "border-gray-300"
          }`}
          onFocus={() => setErrors(false)}
        />
        {errors && !name.trim() && (
    <p className=" text-sm text-red-500">
      * Please fill the note heading.
    </p>

  )}

        <textarea
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          placeholder="Enter Details here"
          className={`h-40 w-full rounded border-2 px-5 py-2 font-medium ${
            errors && !detail.trim() ? "border-red-500" : " border-gray-300"
          }`}
          onFocus={() => setErrors(false)}
        />
        {errors && !detail.trim() && (
          <p className="text-sm text-red-500">
            * Please fill the note details.
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded border-2 bg-white px-5 py-2 font-bold text-black"
        >
          Add Notes
        </button>
      </form>
      <div className=" p-10 bg-gray-900 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-black">Recent Notes:</h1>
        <div className=" flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-full ">
          {task.map(function (props) {
            return (
              
              <div
              key={props.id}
               className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGyF8XgziLwdW9CinGgEdeccNlx85GDmu7G9qns2CNg&s=10')] bg-center bg-no-repeat bg-size-[120%_140%] h-60 w-50 rounded-2xl text-black p-4">
                <div className=" flex justify-end pr-3 relative -top-1 " onClick={()=>{
                  deleteBtn(props.id)
                }}>
                  {<X />}
                </div>

                <h3 className="relative -top-1 text-sm font-bold leading-6.25">
                  {props.name}
                </h3>
                <p className=" relative -top-1 whitespace-pre-wrap wrap-break-word text-sm leading-6.25 text-gray-700">
                  {props.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
