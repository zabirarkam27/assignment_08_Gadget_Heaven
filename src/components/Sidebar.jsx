/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Sidebar = ({categories}) => {
    return (
      <div className="max-h-[420px] bg-white rounded-xl mt-8 p-4 w-11/12 mx-auto md:w-1/4">
        <div className="space-y-4">
          <NavLink to="/" className="btn rounded-full w-full text-left mb-4">
            All Products
          </NavLink>
        </div>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.category}>
              <NavLink
                className="btn rounded-full w-full text-left"
                to={`/category/${category.category}`}
              >
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Sidebar;
