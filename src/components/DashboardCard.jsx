/* eslint-disable react/prop-types */

const DashboardCard = ({ gadget, handleRemove, children}) => {
  const { image, title, description, price, id } = gadget || {};
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
      <figure className="p-4 mx-auto max-h-52 md:w-1/4 w-full">
        <img className="rounded-xl max-w-full w-auto" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <button
            onClick={() => handleRemove(id)}
            className="btn btn-outline border-red-200 rounded-full px-3"
          >
            <img
              className="w-3 "
              src="https://img.icons8.com/?size=100&id=PE50MiaFV893&format=png&color=000000"
              alt="close icon"
            />
          </button>
        </div>
        <p className="text-gray-500">
          <span className="font-bold text-black">Description:</span>
          {description}
        </p>
              <p className="font-bold">Price: $ {price}</p>
              <button>{ children}</button>
      </div>
    </div>
  );
};

export default DashboardCard;
