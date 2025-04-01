import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getRequest } from "../services/endpoints";
import { ProfileResponse } from "../types/interfaces";
import { Heart, Menu, ChevronDown } from "react-feather";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [user, setUser] = useState<ProfileResponse | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [manageDropdown, setManageDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      const fetchUserData = async () => {
        try {
          const response = await getRequest<ProfileResponse>(`/profile/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response && response.data) {
            setUser(response);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setDropdownOpen(false);
    navigate("/login");
  };

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

      <div className="flex space-x-4 text-sm font-semibold ml-auto">
        <Link to="/favoriteProperty" className="hover:text-gray-300 flex items-center">
          <Heart className="w-4 h-4 mr-1 font-bold mt-1" />
        </Link>
        <span>|</span>
        <Link to="/navbarListProperty" className="hover:text-gray-300">List a Property</Link>
        <span>|</span>
        <Link to="/business-solutions" className="hover:text-gray-300">Business Solutions</Link>
        <span>|</span>

        <div className="relative">
          <button
            className="hover:text-gray-300 flex items-center"
            onClick={() => setManageDropdown(!manageDropdown)}
          >
            Manage Rentals <ChevronDown className="w-4 h-4 ml-1 mt-1" />
          </button>
          {manageDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-md">
              <Link to="/manage/properties" className="block px-4 py-2 hover:bg-gray-100">
                My Properties
              </Link>
              <Link to="/manage/tenants" className="block px-4 py-2 hover:bg-gray-100">
                Tenant Management
              </Link>
            </div>
          )}
        </div>

        <span>|</span>
        <Link to="/moving-center" className="hover:text-gray-300">Moving Center</Link>
        <span>|</span>

        {!user && (
          <>
            <Link to="/login" className="hover:text-gray-300">Log In</Link>
            <span>|</span>
            <Link to="/register" className="hover:text-gray-300">Sign Up</Link>
          </>
        )}
      </div>

      {user && (
        <div className="flex items-center space-x-2 ml-4">
          <div className="text-sm font-medium">{user.data.firstName}</div>
          <div className="relative">
            <img
              src={user.data.profilePictures.url|| "/default-user-icon.png"}
              alt={user.data.profilePictures.alternateName}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
