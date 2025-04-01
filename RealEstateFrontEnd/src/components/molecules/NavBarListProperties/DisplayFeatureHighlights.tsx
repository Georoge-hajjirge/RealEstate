import React from "react";

const features = [
  "Post your property in minutes at absolutely no cost",
  "Access 45+ million monthly visitors on the Rent. + Redfin Network.",
  "Screen tenants with our detailed and easy-to-use applications",
];

const DisplayFeatureList: React.FC = () => {
  return (
    <ul className="text-gray-950 text-base mt-4 ml-3 lg:w-72">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-black text-lg font-bold mr-2">•</span> 
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default DisplayFeatureList;
