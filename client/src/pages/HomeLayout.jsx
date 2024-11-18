import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <NavBar />
      <div className="flex-1 overflow-y-auto px-12 pt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
