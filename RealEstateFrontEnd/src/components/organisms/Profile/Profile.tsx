import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRequest, putRequest } from '../../../services/endpoints';
import { ProfileResponse } from '../../../types/interfaces';
import ProfileForm from '../../molecules/ProfileForm';


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
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response && response.data) {
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
    setFormData((prev: any) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setIsUpdated(JSON.stringify(originalData) !== JSON.stringify({ ...originalData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) formDataToSubmit.append(key, formData[key]);
    });

    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      await putRequest(`/profile/${userId}`, formDataToSubmit, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });

      alert('Profile updated successfully');
      setIsEditing(false);
      setOriginalData(formData);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>
      <ProfileForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleCancel={() => setIsEditing(false)}
        isEditing={isEditing}
        isUpdated={isUpdated}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};

export default Profile;
