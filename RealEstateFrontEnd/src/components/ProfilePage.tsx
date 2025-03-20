import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRequest, putRequest } from '../services/endpoints';
import { ProfileResponse } from '../types/interfaces';

const Profile = () => {
  const [formData, setFormData] = useState<any>({});
  const [originalData, setOriginalData] = useState<any>({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const userId = localStorage.getItem('userId');

        const response = await getRequest<ProfileResponse>(`/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response && response.data) {
          console.log('Fetched profile data:', response.data);
          setFormData(response.data);
          setOriginalData(response.data);
        } else {
          alert('No profile data returned');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prev: any) => ({
        ...prev,
        [name]: files[0], 
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value, 
      }));
    }

    setIsUpdated(JSON.stringify(originalData) !== JSON.stringify({ ...originalData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phoneNumber', formData.phoneNumber);
    formDataToSubmit.append('role', formData.role);

    if (formData.profilePicture) {
      formDataToSubmit.append('profilePicture', formData.profilePicture);
    }

    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      const response = await putRequest(`/profile/${userId}`, formDataToSubmit, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      });

      alert('Profile updated successfully');
      setIsEditing(false);
      setOriginalData(formData);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleCancel = () => {
    if (isEditing) {
      setFormData(originalData);
      setIsEditing(false);
      setIsUpdated(false);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>
      {formData ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-medium text-gray-700">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="font-medium text-gray-700">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="role" className="font-medium text-gray-700">Role:</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="profilePicture" className="font-medium text-gray-700">Profile Picture:</label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleInputChange}
                disabled={!isEditing}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex space-x-4 mt-6">
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    disabled={!isUpdated}
                    className={`px-6 py-2 bg-indigo-600 text-white rounded-md ${!isUpdated ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <p className="text-center">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
