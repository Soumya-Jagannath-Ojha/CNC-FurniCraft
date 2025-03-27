import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        <Link to={"/"}>
        
        MyLogo
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link to={"/create"}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Create
        </button>
        </Link>
        
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? <IoIosSunny /> : <IoMoonSharp />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
