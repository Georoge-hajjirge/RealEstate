import React from "react";
import SocialIcon from "../../../atoms/SocialIcon";

const DisplayFooterSocialIcons: React.FC = () => {
  const socialLinks = [
    { href: "https://facebook.com", src: "/assets/icons/facebook-app-logo-svgrepo-com.svg" }, 
    { href: "https://twitter.com", src: "/assets/icons/twitter-logo-shape-svgrepo-com.svg"  },
    { href: "https://tiktok.com", src: "/assets/icons/tiktok.svg"},
    { href: "https://pinterest.com", src: "/assets/icons/pinterest-p-svgrepo-com.svg"},

    { href: "https://youtube.com", src: "/assets/icons/youtube-play-svgrepo-com.svg"},
    { href: "https://instagram.com", src: "/assets/icons/instagram-logo-svgrepo-com.svg" },
  ];

  return (
    <div className="flex gap-6 justify-center mt-4">
      {socialLinks.map((item, index) => (
        <SocialIcon
          key={index}
          href={item.href}
          src={item.src}
          className="bg-blue-600 p-2 rounded-full hover:bg-gray-600 transition"
        />
      ))}
    </div>
  );
};

export default DisplayFooterSocialIcons;
