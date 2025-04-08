import React from "react";
import DisplayParagraph from "../../atoms/DisplayParagraph";

interface DisplayFeatureCardProps {
  src: string; 
  text: string;
  className?:string;
  iconColor?: string;
}

const DisplayFeatureCard: React.FC<DisplayFeatureCardProps> = ({ src, text, className,iconColor}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${className}`}>
        <div 
          className={`w-24 h-16 bg-current justify-center items-center${iconColor}`} 
          style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }} 
        />
      </div>
      <DisplayParagraph text={text} className="text-xl !w-44 text-center !text-gray-950" />
    </div>
  );
};

export default DisplayFeatureCard;
