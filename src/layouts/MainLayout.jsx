import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-12">
        <Navbar />
      </div>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-360px)] py-12 max-w-7xl w-11/12 mx-auto">
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default MainLayout;
