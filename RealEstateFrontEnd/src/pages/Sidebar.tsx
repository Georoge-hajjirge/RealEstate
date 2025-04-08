import { X, ChevronRight, ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="w-72 bg-white text-blue-600 h-full fixed top-0 left-0 z-50 shadow-md transition-transform duration-300">
      {activeMenu === "main" && (
        <div className="flex justify-end items-center p-5 border-b border-gray-200 bg-white">
          <button onClick={closeSidebar} className="text-blue-600 font-semibold text-base">
            Close
          </button>
          <X className="w-6 h-6 text-blue-600 cursor-pointer" onClick={closeSidebar} />
        </div>
      )}

      <div className="flex-1 overflow-y-auto h-[calc(100vh-60px)] relative">
        <div
          className={`absolute w-full h-full bg-white transition-transform duration-300 ${
            activeMenu === "main" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-2 space-y-2 font-semibold text-[17px]">
            <Link to="/home" className="hover:bg-blue-50 px-4 py-2 rounded">Home</Link>
            <Link to="/search" className="hover:bg-blue-50 px-4 py-2 rounded">Search</Link>
            <Link to="/saved-properties" className="hover:bg-blue-50 px-4 py-2 rounded">Saved Properties</Link>
            <Link to="/saved-searches" className="hover:bg-blue-50 px-4 py-2 rounded">Saved Searches</Link>
            <Link to="/moving-center" className="hover:bg-blue-50 px-4 py-2 rounded">Moving Center</Link>
            <Link to="/list-property" className="hover:bg-blue-50 px-4 py-2 rounded">List a Property</Link>

            <button
              className="flex justify-between items-center w-full px-4 py-2 rounded hover:bg-gray-100"
              onClick={() => setActiveMenu("manageRentals")}
            >
              Manage Rentals <ChevronRight className="w-4 h-4" />
            </button>

            <Link to="/business-solutions" className="hover:bg-blue-50 px-4 py-2 rounded">Business Solutions</Link>
            <Link to="/rent-calculator" className="hover:bg-blue-50 px-4 py-2 rounded">Rent Calculator</Link>
            <Link to="/rental-price-estimator" className="hover:bg-blue-50 px-4 py-2 rounded">Rental Price Estimator</Link>
            <Link to="/blog" className="hover:bg-blue-50 px-4 py-2 rounded">Blog</Link>
            <Link to="/rent-research" className="hover:bg-blue-50 px-4 py-2 rounded">Rent Research</Link>

            <hr className="my-2 border-gray-300" />

            <Link to="/download-app" className="hover:bg-blue-50 px-4 py-2 rounded">Download the App</Link>
            <Link to="/login" className="hover:bg-blue-50 px-4 py-2 rounded">Log In</Link>
            <Link to="/register" className="hover:bg-blue-50 px-4 py-2 rounded">Sign Up</Link>
          </nav>
        </div>

        <div
          className={`absolute w-full h-full bg-white transition-transform duration-300 ${
            activeMenu === "manageRentals" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <button
              onClick={() => setActiveMenu("main")}
              className="flex items-center text-blue-600 font-semibold mb-4 hover:underline hover:text-blue-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Main Menu
            </button>

            <div className="flex flex-col space-y-2 border-t border-gray-200">
              <div className="mt-10 hover:bg-blue-50 p-2 rounded">
                <p className="text-gray-700">Apartment community?</p>
                <Link to="/renthq-login" className="text-blue-600 font-bold">RentHQ Log In</Link>
              </div>

              <div className="hover:bg-blue-50 p-2 rounded">
                <p className="text-gray-700 mt-4">Are you a landlord?</p>
                <Link to="/landlord-login" className="text-blue-600 font-bold">Landlord Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Sidebar;
