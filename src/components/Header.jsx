import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
// import { HiLockClosed } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar pr-6 bg-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-gray-500 text-white border border-amber-400" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "bg-gray-500 text-white border border-amber-400" : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          <img className="h-10" src="https://i.ibb.co/CBtmL7W/Cuisine-Castle.png.svg" alt="" />
          CuisineCastle
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-gray-500 text-white border border-amber-400" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "bg-gray-500 text-white border border-amber-400" : ""
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar tooltip tooltip-left"data-tip={user.displayName}>
              <div className="w-12 rounded-full">
              {user.photoURL?
             <><img src={user.photoURL}/></> 
            : <><img src='
            https://i.ibb.co/gt2zhwX/abstract-user-flat-1.png'/></>

            }
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-xs ml-2">
              logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-xs ">
              
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
