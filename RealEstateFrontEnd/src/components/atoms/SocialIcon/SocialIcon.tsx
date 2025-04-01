import React from "react";

interface SocialIconProps {
  href: string;
  Icon?: React.ElementType; 
  src?: string; 
  className?: string;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, src, className = "", size = 24 }) => {
  return (
    <a href={href} className={`inline-flex items-center justify-center ${className}`}>
      {src ? (
        <img src={src} alt="social icon" width={size} height={size} className="w-4 h-4 invert"/>
      ) : Icon ? (
        <Icon size={size} />
      ) : null}
    </a>
  );
};

export default SocialIcon;
