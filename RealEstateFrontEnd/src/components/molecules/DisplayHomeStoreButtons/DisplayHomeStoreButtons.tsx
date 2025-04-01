import React from "react";

import appStore from "../../ui/assets/images/app-store-icon.webp";
import googlePlay from "../../ui/assets/images/google-play-store-icon.webp";
import DisplayImage from "../../atoms/DisplayImage/DisplayImage";

const DisplayStoreButtons: React.FC = () => {
  return (
    <div className="flex space-y-4 flex-col">
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <DisplayImage src={appStore} alt="App Store" className="w-28" />
      </a>
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <DisplayImage src={googlePlay} alt="Google Play Store" className="w-28" />
      </a>
    </div>
  );
};

export default DisplayStoreButtons;
