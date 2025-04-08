import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Menu, ChevronDown } from "react-feather";
import { RootState } from "../app/store";
import { logout,  } from "../features/auth";
import { useAppDispatch, useAppSelector } from "../app/hooks";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const userId = useAppSelector((state: RootState) => state.auth.userId);
  const dispatch = useAppDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [manageDropdown, setManageDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 bg-black text-white flex items-center px-6 fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center space-x-3">
        <button onClick={toggleSidebar}>
          <Menu className="w-8 h-8 text-white font-bold cursor-pointer" />
        </button>
        <Link to="/" className="text-white text-5xl font-bold flex items-center mb-3">
          <span>Rent</span>
          <span className="text-blue-500 text-6xl mb-2">.</span>
        </Link>
      </div>

      <div className="flex space-x-4 text-sm font-semibold ml-auto items-center">
        <Link to="/favoriteProperty" className="hover:text-gray-300 flex items-center">
          <Heart className="w-4 h-4 mr-1 font-bold mt-1" />
        </Link>
        <span>|</span>
        <Link to="/navbarListProperty" className="hover:text-gray-300">List a Property</Link>
        <span>|</span>
        <Link to="/createProperty" className="hover:text-gray-300">Business Solutions</Link>
        <span>|</span>

        <div className="relative">
          <button
            className="hover:text-gray-300 flex items-center"
            onClick={() => setManageDropdown(!manageDropdown)}
          >
            Manage Rentals <ChevronDown className="w-4 h-4 ml-1 mt-1" />
          </button>
          {manageDropdown && (
            <div className="absolute left-0 w-48 bg-white text-black rounded-md shadow-md mt-2 p-2 flex flex-col">
              <Link to="/manage/properties" className="px-4 py-2 hover:bg-gray-100">
                My Properties
              </Link>
              <Link to="/manage/tenants" className="px-4 py-2 hover:bg-gray-100">
                Tenant Management
              </Link>
            </div>
          )}
        </div>

        <span>|</span>
        <Link to="/listProperty" className="hover:text-gray-300">Moving Center</Link>
        <span>|</span>

        {!userId ? (
          <>
            <Link to="/login" className="hover:text-gray-300">Log In</Link>
            <span>|</span>
            <Link to="/register" className="hover:text-gray-300">Sign Up</Link>
          </>
        ) : (
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-sm font-medium">
                {/* {user.firstName} */}
                </span>
              <img
                // src={user.profilePictures?.url || "/default-user-icon.png"}
                // alt={user.profilePictures?.alternateName || "User"}
                className="w-10 h-10 rounded-full"
              />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 w-48 bg-white text-black rounded-md shadow-md mt-2 p-2 flex flex-col">
                <button
                  className="text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/profile")}
                  }
                >
                  Profile
                </button>
                <hr className="border-gray-300 my-1" />
                <button
                  className="text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    dispatch(logout());
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
