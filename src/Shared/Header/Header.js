import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logout = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successfully ");
      })
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="block text-black text-lg font-bold font-mono sm:py-1 mx-4    ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/hotels"
          className="block text-black text-lg font-mono font-bold mx-4 sm:py-1    ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Hotels
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="block text-black text-lg font-mono font-bold mx-4 sm:py-1    ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="block text-black text-lg font-mono font-bold mx-4 sm:py-1    ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="block text-black text-lg font-bold font-mono mx-4 sm:py-1    ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className="block text-black text-lg font-bold font-mono mx-4 sm:py-1     ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? 'active' : '' "
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-3  bg-white  lg:px-8 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="mt-4 cursor-pointer lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 shadow bg-white  rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="ml-2 flex normal-case text-xl">
          <img
            className="w-[50px] rounded-lg headerImage h-[50px]"
            src="https://i.ibb.co/1MZDM9G/favicon.png"
            alt=""
          />
          <div className="ml-2 text-black italic font-bold mt-2.5 headerIcon">
            Hotel Booking
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="nav-menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      <div className="nav-menu navbar-end">
        {user && user.uid ? (
          <button onClick={logout} className="mr-4 text-lg font-mono font-bold">
            LogOut
          </button>
        ) : (
          <ul className="flex mx-4 ">
            <li className="">
              <NavLink
                to="/signUp"
                className="block text-black text-lg font-mono sm:py-1 lg:mx-4 mx-1 font-bold   ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : '' "
              >
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block  text-black text-lg font-mono sm:py-1  pl-3 font-bold   ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : '' "
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="https://i.ibb.co/S5PRg6x/download.jpg" alt="" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="justify-between  ">{user?.displayName}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <label
        htmlFor="dashboardDrawer"
        tabIndex={2}
        className="btn p-0 btn-ghost lg:hidden"
      >
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
      </label>
    </div>
  );
};

export default Header;
