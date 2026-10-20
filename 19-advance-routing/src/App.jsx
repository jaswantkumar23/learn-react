import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Courses/Courses";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import CoursesDetail from "./Courses/CoursesDetail";
import Nav2 from "./components/Nav2";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursesDetail />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
