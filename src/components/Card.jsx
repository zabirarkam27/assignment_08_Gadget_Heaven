/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { id, image, title, price } = gadget || {};
  return (
    <div className="card rounded-3xl bg-base-100 max-w-96 shadow-xl">
      <figure className="p-6 ">
        <img className="rounded-xl" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions justify-start">
          <Link
            to={`/gadget/${id}`}
            className="btn btn-outline rounded-full border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
