import React from "react";
import { DisplayImage } from "../../atoms/DisplayImage";
import RentImage from '../../ui/assets/images/rent.webp'
import RedfinImage from '../../ui/assets/images/redfin.webp'
import Apartmentguide from '../../ui/assets/images/apartmentguide.webp'



const DisplayPartnerLogos: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-16 mt-6 md:flex-col ">
      <DisplayImage
        src={RentImage}
        alt="Rent Logo"
        className="w-32 "
      />
      <DisplayImage
        src={Apartmentguide}
        alt="Redfin Logo"
        className="w-40 mb-10"
      />
      <DisplayImage
        src={RedfinImage}
        alt="Apartment Guide Logo"
        className="w-32"
      />

    </div>
  );
};

export default DisplayPartnerLogos;
