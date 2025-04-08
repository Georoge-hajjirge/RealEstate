import React from "react";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";
import { DisplayImage } from "../../atoms/DisplayImage";
import homeImage from "../../ui/assets/images/home.webp"

const DisplayLeasingJourney: React.FC = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-10 py-14">
      <div className="max-w-lg text-center">
        <DisplayParagraph
          text="From filling vacancies to retaining residents"
          className="!text-gray-950 text-sm !text-semibold mb-2 w-3/6 ml-14"
        />

        <DisplayHeading
          text="Simplify your entire leasing journey"
          className="!text-gray-950 !text-2xl font-bold leading-tight mb-2  w-72"
        />

        
        <div className="w-8 h-1 bg-blue-600 mx-auto mb-4 mt-6 ml-32 "></div>

       
        <DisplayParagraph
          text="We help you attract, engage and retain renters with a full suite of multifamily marketing and communication solutions designed for property teams. Boost your results even further with marketing solutions powered by our proprietary audience of in-market renters."
          className="!text-gray-950 text-sm w-[300px]"
        />
      </div>

  
       
        <div className="border-8rounded-xl p-4">
          <DisplayImage
            src={homeImage}
            alt="Couple on a couch"
            className="rounded-xl w-64 h-auto"
          />
        </div>
      
    </section>
  );
};

export default DisplayLeasingJourney;
