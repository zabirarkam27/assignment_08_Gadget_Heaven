import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});
  useEffect(() => {
    const itemData = data.find((gadget) => gadget.id == id);
    setGadget(itemData);
  }, [data, id]);
  const {
    title,
    image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;

  return (
    <>
      {/* card heading */}
      <div className="bg-[#9538E2] h-80 py-8 space-y-3 text-center text-white relative">
        <h1 className="text-2xl md:text-3xl text-center font-bold">
          Product Details
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      {/* card body */}
      <div className="relative">
        <div className="card lg:card-side rounded-2xl bg-base-100 shadow-xl max-w-[900px] w-11/12 mx-auto -mt-40 z-10 relative">
          <figure className="p-6 md:w-2/5 w-full">
            <img
              className="rounded-xl max-w-full w-auto"
              src={image}
              alt={title}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-lg font-semibold">Price: $ {price}</p>
            {/* dynamic badge */}
            {availability ? (
              <div className="text-sm badge p-4 rounded-full text-[#309C08] bg-[#309C08]/10 border-[#309C08]">
                In Stock
              </div>
            ) : (
              <div className="text-sm badge p-4 rounded-full text-[#D00000] bg-[#D00000]/10 border-[#D00000]">
                Stock Out
              </div>
            )}
            <p className="text-gray-500">{description}</p>
            <div>
              <h4 className="text-base font-bold">Specification:</h4>
              <ol className="list-decimal list-inside">
                {specification && specification.length > 0 ? (
                  specification.map((specificationList, index) => (
                    <li className="ml-3 text-gray-500" key={index}>
                      {specificationList}
                    </li>
                  ))
                ) : (
                  <li> No specification available</li>
                )}
              </ol>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <h4 className="text-base font-bold">Rating</h4>
              <img
                className="w-4"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt="star icon"
              />
            </div>
            {/* rating */}
            <div>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="badge rounded-full bg-gray-100 ml-2 p-3">
                {rating}
              </div>
            </div>
            {/* Buttons */}
            <div className="card-actions justify-start">
              <button className="btn rounded-full bg-[#9538E2] text-white hover:bg-white hover:border-[#9538E2] hover:text-[#9538E2] transition-colors duration-300 flex item-center gap-2 group">
                Add to Cart
                <svg
                  className="w-4 h-4 text-white group-hover:text-[#9538E2] transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
      </div>
    </>
  );
};

export default GadgetDetails;
