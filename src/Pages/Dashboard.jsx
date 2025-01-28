/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Heading from "./../components/Heading";
import {
  getAllWishlist,
  getAllCartItems,
  removeFromCart,
  removeWishlist,
  addCart,
} from "../utilities";

import DashboardCard from "../components/DashboardCard";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("cart");
  const navigate = useNavigate();

  useEffect(() => {
    setWishlist(getAllWishlist());
    setCart(getAllCartItems());
  }, []);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "wishlist" || tab === "cart") {
      setActiveTab(tab)
    }
  },[searchParams])

  const handleWishlistRemove = (id) => {
    removeWishlist(id);
    setWishlist(getAllWishlist());
  };

  const handleCartRemove = (id) => {
    removeFromCart(id);
    setCart(getAllCartItems());
  };

  const handleAddToCart = (gadget) => {
    addCart(gadget);
    handleWishlistRemove(gadget.id);

    setCart(getAllCartItems());
    setWishlist(getAllWishlist());
  };

  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price;
  }

  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleCloseModal = () => {
    localStorage.removeItem("cartItems");
    setCart([]);
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Gadget Heaven || Dashboard</title>
      </Helmet>
      {/* Heading */}
      <div className=" bg-[#9538E2] py-8 my-8 space-y-8">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <button
            className={`btn rounded-full w-[120px] font-semibold border-[#9538E2]   hover:border-white hover:bg-[#9538E2] hover:text-white transition-colors duration-300 ${
              activeTab === "cart"
                ? "bg-[#9538E2] text-white border-white"
                : "bg-white text-[#9538E2]"
            } `}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full w-[120px] font-semibold ${
              activeTab === "wishlist"
                ? "bg-[#9538E2] text-white border-white"
                : "bg-white text-[#9538E2]"
            } border-[#9538E2]   hover:border-white hover:bg-[#9538E2] hover:text-white transition-colors duration-300`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart */}
      {activeTab === "cart" && (
        <div>
          <div className="w-11/12 mx-auto flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4">
              <h2 className="text-xl font-bold">Total cost: $ {totalPrice}</h2>

              {/* sort btn */}
              <button
                onClick={handleSortByPrice}
                className="btn rounded-full font-semibold border-[#9538E2]   hover:border-white hover:bg-[#9538E2] hover:text-white transition-colors text-[#9538E2] duration-300 mt-4 flex items-center space-x-2"
              >
                <p className="font-bold">Sort by Price</p>
                <img
                  className="w-4"
                  src="https://img.icons8.com/?size=100&id=48206&format=png&color=000000"
                  alt=""
                />
              </button>

              {/* purchase btn */}
              <button
                onClick={handlePurchase}
                disabled={cart.length === 0 || totalPrice === 0}
                className="btn rounded-full font-semibold border-[#9538E2] bg-[#9538E2] hover:bg-white text-white hover:text-[#9538E2] transition-colors duration-300 mt-4 flex items-center space-x-2"
              >
                Purchase
              </button>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            {cart.map((gadget) => (
              <DashboardCard
                handleRemove={handleCartRemove}
                key={gadget.id}
                gadget={gadget}
              />
            ))}
          </div>
        </div>
      )}

      {/* Wishlist */}
      {activeTab === "wishlist" && (
        <div>
          <h2 className="w-11/12 mx-auto text-2xl font-bold mb-8">Wishlist</h2>
          <div className="w-11/12 mx-auto">
            {wishlist.map((gadget) => (
              <DashboardCard
                key={gadget.id}
                gadget={gadget}
                handleRemove={handleWishlistRemove}
              >
                <div className="card-actions justify-start">
                  <button
                    onClick={() => handleAddToCart(gadget)}
                    className="btn rounded-full w-[120px] font-semibold border-[#9538E2]   hover:border-white hover:bg-[#9538E2] hover:text-white transition-colors duration-300 mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </DashboardCard>
            ))}
          </div>
        </div>
      )}

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col justify-center items-center bg-white rounded-xl p-4 w-1/4 space-y-2">
          <img
            src="https://img.icons8.com/?size=100&id=A8xKzsTKHhzn&format=png&color=000000"
            alt="success icon"
          />
          <h2>Payment Successfully Done</h2>
          <div className="border-b border-gray-500" />
          <p className="text-gray-500">Thanks for purchasing from us.</p>
          <p className="text-gray-500">Total: $ {totalPrice}</p>
          <form method="dialog">
            <button
              handleRemove={handleCartRemove}
              onClick={handleCloseModal}
              className="btn bg-gray-300 w-[250px] rounded-full my-3 py-2"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Dashboard;
