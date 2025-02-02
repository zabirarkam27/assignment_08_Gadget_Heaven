import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-4 md:px-10 z-50 top-0 left-0 right-0 fixed backdrop-blur-xl bg-[#9538E2]/50 text-white rounded-t-xl w-full">
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
              className="menu menu-sm dropdown-content bg-[#b76ef3] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold" : "hover:text-gray-200"}hover:scale-105 transition-transform`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold" : "hover:text-gray-200"}hover:scale-105 transition-transform`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold" : "hover:text-gray-200"}hover:scale-105 transition-transform`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white font-bold" : "hover:text-gray-200"}hover:scale-105 transition-transform`
                }
                to="/about-us"
              >
                About-us
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="font-bold hover:white hover:scale-105 transition-transform text-xl"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-white font-bold" : "hover:text-gray-200"
                } hover:scale-105 transition-transform`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-white font-bold" : "hover:text-gray-200"
                } hover:scale-105 transition-transform`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold" : "hover:text-gray-200"} hover:scale-105 transition-transform`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white font-bold" : "hover:text-gray-200"} hover:scale-105 transition-transform`
              }
              to="/about-us"
            >
              About-us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-2 flex items-center justify-end">
          <NavLink
            to="/dashboard?tab=cart"
            className="btn bg-white py-4 px-3 rounded-full"
          >
            <img
              className="w-4"
              src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
              alt="cart-icon"
            />
          </NavLink>
          <NavLink
            to="/dashboard?tab=wishlist"
            className="btn bg-white py-4 px-3 rounded-full"
          >
            <img
              className="w-4"
              src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
              alt="wishlist-icon"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
