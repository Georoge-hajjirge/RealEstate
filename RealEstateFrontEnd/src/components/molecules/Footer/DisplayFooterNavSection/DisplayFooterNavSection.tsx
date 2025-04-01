import React from "react";
import DisplayFooterNavLink from "../../../atoms/DisplayFooterNavLink";

interface FooterNavSectionProps {
  title: string;
  links: { text: string; href: string }[];
}

const DisplayFooterNavSection: React.FC<FooterNavSectionProps> = ({ title, links }) => {
  return (
    <div className=" flex flex-col items-center text-center md:text-left">
      <h4 className="text-white font-bold mb-2 text-sm ">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <DisplayFooterNavLink key={index} text={link.text} href={link.href} />
        ))}
      </div>
    </div>
  );
};

export default DisplayFooterNavSection;
