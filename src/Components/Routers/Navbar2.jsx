import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
// we use usenavigate for functional Routing link onclick navigate etc...
  const navigate = useNavigate();

  return (
    <div className="py-2 px-5 bg-cyan-800">
      <button
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
      <button
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1);
        }}
      >
        Prev
      </button>
      <button
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
