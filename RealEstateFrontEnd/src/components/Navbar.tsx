import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { getRequest } from "../services/endpoints";
import { ProfileResponse } from "../types/interfaces"; 
import { Heart, List } from 'react-feather';
type NavbarProps = {
  toggleSidebar: () => void;
};
const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [user, setUser] = useState<ProfileResponse | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (userId && token) {
      const fetchUserData = async () => {
        try {
          const response = await getRequest<ProfileResponse>(`/profile/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response && response.data) {
            setUser(response); 
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setDropdownOpen(false); 
    navigate('/login'); 
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate('/profile');
  };

  return (
    <div className="w-full h-16 bg-gray-700 text-white flex items-center justify-between px-4 fixed top-0 left-0 z-10">
      <div className="flex items-center">
        {user && (<List className="w-9 h-9 cursor-pointer" onClick={toggleSidebar} />)}
        <img
          src="/images/REWlogo.jpg"
          alt="Rent "
          className="max-h-14 ml-4"
        />
      </div>

      <div className="flex space-x-6">

        <Link
          to="/listProperty"
          className="text-white hover:text-gray-300"
        >
          List Properties
        </Link>
        <Link
          to="/favoriteProperty"
          className="text-white hover:text-gray-300 flex items-center"
        >
          <Heart className="w-5 h-5 mr-2" />

        </Link>

        <Link
          to="/createProperty"
          className="text-white hover:text-gray-300"
        >
          Create Properties
        </Link>

        <Link
          to="/business-solutions"
          className="text-white hover:text-gray-300"
        >
          Business Solutions
        </Link>
        <Link
          to="/manage-rentals"
          className="text-white hover:text-gray-300"
        >
          Manage Rentals
        </Link>
      </div>

      <div className="relative flex items-center">
        {user ? (
          <>
            <img
              src={user.data.profilePicture || "/default-user-icon.png"}
              alt="User Avatar"
              className="w-24 h-14 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleProfileClick}
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
          </>
        ) : (
          <div>
            <Link
              to="/login"
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
