import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Toaster/>
      {/* Navbar */}
      <div
        className={`mt-4 h-16 container mx-auto rounded-t-xl ${
          isHomePage ? "bg-[#9538E2]" : "bg-white"
        } ${isHomePage ? "text-white" : "bg-black"}`}
      >
        <Navbar />
      </div>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-450px)] bg-gray-50 container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
