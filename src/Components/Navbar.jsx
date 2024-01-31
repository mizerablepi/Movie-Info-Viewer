import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavaBar({ username, setUsername }) {
  const url = useLocation();

  const logOut = () => {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("password");
    setUsername(null);
  };

  return (
    <nav className="flex gap-4 bg-red-500 p-4 ">
      <div className="flex items-center">
        <span className="font-bold text-2xl text-white font-serif italic">
          SeeMyShow
        </span>
      </div>
      <div className="flex items-center mx-auto">
        <Link
          to={"/"}
          className={`text-lg font-bold text-white px-4 py-2  hover:bg-red-600 hover:shadow transition rounded decoration-4 underline-offset-8 ${
            url.pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/shows"}
          className={`text-lg font-bold text-white px-4 py-2 hover:bg-red-600 hover:shadow transition rounded decoration-4 underline-offset-8 ${
            url.pathname === "/shows" ? "underline" : ""
          }`}
        >
          Shows
        </Link>
      </div>
      {username ? (
        <Link
          to={"/"}
          onClick={logOut}
          className="bg-white font-bold text-red-600 px-4 py-2 rounded-md"
        >
          {`HI, ${username}`}
        </Link>
      ) : (
        <Link
          to={"/login"}
          className="bg-white font-bold text-red-600 px-4 py-2 rounded-md"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default NavaBar;
