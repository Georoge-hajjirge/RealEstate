import React from 'react';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';

interface ProfileFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleCancel: () => void;
  isEditing: boolean;
  isUpdated: boolean;
  setIsEditing: (state: boolean) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ formData, handleInputChange, handleSubmit, handleCancel, isEditing, isUpdated, setIsEditing }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} disabled={!isEditing}  />
      <InputField label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} disabled={!isEditing} />
      <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={!isEditing} />
      <InputField label="Phone Number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} disabled={!isEditing} />
      <InputField label="Role" type="text" name="role" value={formData.role} onChange={handleInputChange} disabled={!isEditing} />
      <InputField label="Profile Picture" type="file" name="profilePicture" onChange={handleInputChange} disabled={!isEditing} />

      <div className="flex space-x-4 mt-6">
        {isEditing ? (
          <>
            <Button text="Update" type="submit" disabled={!isUpdated} variant="primary" />
            <Button text="Cancel" onClick={handleCancel} variant="secondary" />
          </>
        ) : (
          <Button text="Edit" onClick={() => setIsEditing(true)} variant="primary" />
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
