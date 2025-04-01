import React from "react";

interface ParagraphProps {
  text: string;
  className?: string; 
}

const DisplayParagraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return <p className={`w-64 text-white text-lg mt-2 ransition-all duration-300 group-hover:underline group-hover:decoration-white
     ${className || ""}`}>{text}</p>;
};

export default DisplayParagraph;
