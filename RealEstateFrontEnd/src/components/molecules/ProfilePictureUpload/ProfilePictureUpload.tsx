import { ProfilePictureUploadProps } from "../../../types/interfaces";

const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({ imagePreview }) => {
    if (!imagePreview) return null; 
    
    return (
      <div className="mb-4">
        <img src={imagePreview} alt="Preview" className="w-full h-auto object-cover" />
      </div>
    );
  };
  
  export default ProfilePictureUpload;
  