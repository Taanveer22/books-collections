import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="px-4 py-2 m-1 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300">Home</li>
      </Link>
      <Link to="/about">
        <li className="px-4 py-2 m-1 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300">About</li>
      </Link>
      <Link to="/readList">
        <li className="px-4 py-2 m-1 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300">Read List</li>
      </Link>
    </>
  );
  
  return (
    <div className="navbar bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-blue-50 dark:hover:bg-blue-900/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-800 rounded-lg w-52 border border-gray-200 dark:border-gray-700"
          >
            {links}
          </ul>
        </div>
        <span className="text-xl text-blue-600 dark:text-blue-400 px-4">
          <span className="font-bold">Wafi Life</span>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <span className="text-blue-600 font-bold dark:text-blue-400 px-4">E-library</span>
      </div>
    </div>
  );
};

export default Navbar;