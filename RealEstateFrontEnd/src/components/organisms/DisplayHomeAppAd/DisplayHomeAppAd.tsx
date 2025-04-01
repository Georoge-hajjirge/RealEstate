import React from "react";
import phoneMockup from "../../ui/assets/images/mobile-app-homepage.webp";
import qrCode from "../../ui/assets/images/rent-app-qr-code.webp";
import DisplayImage from "../../atoms/DisplayImage/DisplayImage";
import DisplayStoreButtons from "../../molecules/DisplayHomeStoreButtons/DisplayHomeStoreButtons";

const DisplayAppAd: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-black p-36 ">
      
      <div className="flex mr-10">
        <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] xl:w-[700px] xl:h-[700px] rounded-full flex ">
          <DisplayImage 
            src={phoneMockup} 
            alt="Mobile App"    
          />
        </div>
      </div>

      <div className="lg:w-1/2 lg:text-left lg:ml-10">
        <h1 className="text-white text-5xl font-bold">
          The <span className="text-blue-400">fastest</span> way to rent a home is with the app.
        </h1>
        <p className="mt-4 text-white text-lg">
          Now with the app, saving your favorite properties is easier than ever. Available now in the Apple App Store and Google Play Store.
        </p>

        <div className="mt-6 flex flex-row items-center lg:items-start space-x-4">
          <DisplayImage src={qrCode} alt="QR Code" className="w-24 h-24" />
          <div className="ml-10">
            <DisplayStoreButtons />
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-blue-400 text-lg font-semibold">
            Scan to get the app
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppAd;
