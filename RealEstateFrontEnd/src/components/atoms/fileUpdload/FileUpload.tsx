import React from "react";

interface FileUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-medium text-gray-700">Upload Image:</label>
      <input 
        type="file" 
        accept="image/*" 
        onChange={onChange} 
        className="p-2 border border-gray-300 rounded-md" 
      />
    </div>
  );
};

export default FileUpload;
