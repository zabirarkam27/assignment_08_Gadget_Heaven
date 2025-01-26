import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-10 z-50 fixed backdrop-blur-xl rounded-t-xl">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="font-bold hover:text-[#9538E2] hover:scale-105 transition-colors text-xl"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-warning" : "hover:text-[#e3c7fa]"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <a className="btn bg-white py-4 px-3 rounded-full">
            <img
              className="w-4"
              src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
              alt="cart-icon"
            />
          </a>
          <a className="btn bg-white py-4 px-3 rounded-full">
            <img
              className="w-4"
              src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
              alt="cart-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
