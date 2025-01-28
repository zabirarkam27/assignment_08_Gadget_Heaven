import { useEffect, useState } from "react";
import Heading from "./../components/Heading";
import {
  getAllWishlist,
  getAllCartItems,
  removeFromCart,
  removeWishlist,
  addCart,
} from "../utilities";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  // const [gadgets, setGadgets] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");

  useEffect(() => {
    setWishlist(getAllWishlist());
    setCart(getAllCartItems());
  }, []);

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

  return (
    <>
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
              <h2 className="text-xl font-bold">Total cost: </h2>

              {/* sort btn */}
              <button className="btn rounded-full font-semibold border-[#9538E2]   hover:border-white hover:bg-[#9538E2] hover:text-white transition-colors text-[#9538E2] duration-300 mt-4 flex items-center space-x-2">
                <p className="font-bold">Sort by Price</p>
                <img
                  className="w-4"
                  src="https://img.icons8.com/?size=100&id=48206&format=png&color=000000"
                  alt=""
                />
              </button>

              {/* purchase btn */}
              <button className="btn rounded-full font-semibold border-[#9538E2] bg-[#9538E2] hover:bg-white text-white hover:text-[#9538E2] transition-colors duration-300 mt-4 flex items-center space-x-2">
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
    </>
  );
};

export default Dashboard;
