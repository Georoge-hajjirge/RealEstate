import React from "react";

interface DisplayStoreButtonsProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const DisplayStoreButtons: React.FC<DisplayStoreButtonsProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[40%] mt-6 px-2 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 ${className}`}
    >
      {text}
    </button>
  );
};

export default DisplayStoreButtons;
