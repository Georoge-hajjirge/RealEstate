import React from "react";

import DisplayTipsSection from "../organisms/DisplayTipsSection";
import { DisplayHero } from "../organisms/DisplayHero";
import DisplayAppAd from "../organisms/DisplayHomeAppAd/DisplayHomeAppAd";

const HomePageComponents: React.FC = () => {
  return (
    <div>
      <DisplayHero />
      <DisplayAppAd />
      <DisplayTipsSection />
    </div>
  );
};

export default HomePageComponents;
