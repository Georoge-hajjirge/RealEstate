import React from "react";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";
import DisplayFeatureList from "../../molecules/NavBarListProperties/DisplayFeatureHighlights";
import { DisplayImage } from "../../atoms/DisplayImage";
import DisplayStoreButtons from "../../atoms/DisplayStoreButtons";
import phoneImage from "../../ui/assets/images/phone.webp";

const DisplayHighlightSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto px-6 py-6 gap-12 max-w-6xl">
      <div className="lg:w-1/2 text-left mt-6 py-6 px-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 text-3xl font-semibold">Rent.</span>
          <span className="text-red-700 text-2xl font-bold mt-1">REDFIN</span>
        </div>

        <DisplayHeading
          text="List your home with Redfin"
          className="!text-black !text-5xl !font-medium mt-4 leading-tight w-[350px] px-1"
        />

        <DisplayParagraph 
          text="and it will automatically appear on Rent." 
          className="!text-gray-900 !text-base  w-96 !mt-6"
        />

        <DisplayFeatureList />

        <DisplayStoreButtons 
          text="List your home with Redfin" 
          className="mt-6 w-full lg:w-80 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-2 rounded-md transition duration-300 ease-in-out shadow-md"
          onClick={() => alert("Redirecting to blog...")} 
        />
      </div>

      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <DisplayImage
          src={phoneImage}
          alt="Property listing on mobile"
          className="w-80 lg:w-[250px] h-auto"
        />
      </div>
    </div>
  );
};

export default DisplayHighlightSection;
