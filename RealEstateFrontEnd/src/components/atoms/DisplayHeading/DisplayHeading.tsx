import React from "react";

interface HeadingProps {
  text: React.ReactNode;
    highlight?: string;
  className?: string;
}

const DisplayHeading: React.FC<HeadingProps> = ({ text, highlight, className }) => {
  return (
    <h2 className={`w-56 text-white text-base font-bold  
      transition-all group-hover:underline group-hover:decoration-white group-hover:text-white 

 ${className }`}>
      {text} <span className="text-blue-500">{highlight}</span>
    </h2>
  );
};

export default DisplayHeading;
