import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/about", "/courses", "/product"];

  const currentIndex = pages.indexOf(location.pathname);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return (
    <div className="bg-cyan-900 flex gap-5">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-700 py-2 px-4 rounded m-2"
      >
        Return to Home
      </button>

      <button
        onClick={handleBack}
        disabled={currentIndex <= 0}
        className="bg-amber-700 py-2 px-4 rounded m-2 disabled:opacity-50"
      >
        Back
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === -1 || currentIndex >= pages.length - 1}
        className="bg-amber-700 py-2 px-4 rounded m-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
