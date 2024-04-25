import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const links = [
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>,
    <li>
      <NavLink to={"/allSpots"}>All Tourists Spot</NavLink>
    </li>,
    <li>
      <NavLink to={"/addSpot"}>Add Tourists Spot</NavLink>
    </li>,
    <li>
      <NavLink to={"/mySpots"}>My List</NavLink>
    </li>,
  ];
  return (
    <div className="px-5 lg:px-[80px] shadow-lg">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border object-contain">
              <img
                src="https://i.ibb.co/kSMycY6/Spots4u.png"
                alt=""
                className=""
              />
            </div>
            <NavLink className="btn btn-ghost text-xl ml-[-15px]">
              Spots4U
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink to={"/logIn"} className="btn">
            Log In
          </NavLink>
          <NavLink to={"/register"} className="btn">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
