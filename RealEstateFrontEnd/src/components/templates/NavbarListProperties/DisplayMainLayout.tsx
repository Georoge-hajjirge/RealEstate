import React, { useEffect, useState } from "react";
import { DisplayFeatureSection, DisplayHighlightSection, DisplayLeasingJourney, DisplayPartnerSection, DisplayPropertyPromo } from "../../organisms/NavbarListProperties";
import { DisplayLoader } from "../../atoms/DisplayLoader";

const DisplayMainLayout: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); 
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <DisplayLoader />;
    }
  return (
    <div className="flex flex-col items-center gap-10 p-10min-h-screen">
      <DisplayHighlightSection />
      <div className="flex justify-center items-center w-full  bg-blue-50 ">
        <DisplayPropertyPromo />
      </div>
      <div className="mr-10">
      <DisplayPartnerSection />
      </div>
      <div className="flex justify-center items-center w-full  bg-blue-50 ">
      <DisplayFeatureSection/>
      </div>
       <DisplayLeasingJourney/>
    </div>
  );
};

export default DisplayMainLayout;
