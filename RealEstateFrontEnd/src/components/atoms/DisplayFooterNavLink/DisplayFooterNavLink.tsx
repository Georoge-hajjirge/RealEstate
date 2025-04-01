import React from "react";

interface FooterNavLinkProps {
  text: string;
  href: string;
}

const DisplayFooterNavLink: React.FC<FooterNavLinkProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-white transition-colors duration-300 cursor-pointer
       hover:underline  hover:text-blue-300 w-48 text-center font-semibold text-[15px]"
    >
      {text}
    </a>
  );
};

export default DisplayFooterNavLink;
