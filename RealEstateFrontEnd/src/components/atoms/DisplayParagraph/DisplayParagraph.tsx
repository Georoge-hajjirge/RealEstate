import React from "react";

interface ParagraphProps {
  text?: string;
  className?: string; 
  children?: React.ReactNode;
}

const DisplayParagraph: React.FC<ParagraphProps> = ({ text, className,children  }) => {
  return <p className={`w-64 text-white text-lg mt-2 ransition-all duration-300 group-hover:underline group-hover:decoration-white
     ${className || ""}`}>{text || children}</p>;
};

export default DisplayParagraph;
