import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const categories = useLoaderData()
  return (
    <>
      <Banner />
      <div className="mt-[400px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex flex-col md:flex-row container mx-auto px-4 md:px-6 lg:px-8 gap-6">
        <Sidebar categories={categories} />
        {/* Dynamic gadget Cards */}
        <Outlet />
      </div>
    </>
  );
};

export default Home;
