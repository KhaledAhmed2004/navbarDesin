import { Outlet } from "react-router-dom";
import Navbar from "./../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#F5F7F8]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
