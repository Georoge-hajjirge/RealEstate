import React, { useEffect, useState } from "react";

import DisplayTipsSection from "../organisms/DisplayTipsSection";
import { DisplayHero } from "../organisms/DisplayHero";
import DisplayAppAd from "../organisms/DisplayHomeAppAd/DisplayHomeAppAd";
import { DisplayLoader } from "../atoms/DisplayLoader";

const HomePageComponents: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DisplayLoader />;
  }  return (
    <div>
      <DisplayHero />
      <DisplayAppAd />
      <DisplayTipsSection />
    </div>
  );
};

export default HomePageComponents;
