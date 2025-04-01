import React from "react";

interface DisplayImageProps {
  src: string;
  alt: string;
  className?: string;
}

const DisplayImage: React.FC<DisplayImageProps> = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`object-cover ${className}`} />
  );
};

export default DisplayImage;
