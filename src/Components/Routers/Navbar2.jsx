import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeDataContext } from "../../Context/Themecontext";

const Navbar2 = () => {
  // we use usenavigate for functional Routing link onclick navigate etc...
  const navigate = useNavigate();

  const [theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    setTheme(prev=> prev=='light'?'dark':'light')
  };
  return (
    <div className={` ${theme} py-2 px-5  flex justify-between items-center nav`}>
      <div className="">
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
      <div className="">
        <button onClick={changeTheme}
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"> 
        Change Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
