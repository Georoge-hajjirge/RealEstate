import React from "react";
import { DisplayImage } from "../../atoms/DisplayImage";
import ApartmentInfo from "../../molecules/NavBarListProperties/DisplayPropertyInfo";


const ListYourApartment: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-10 px-5">
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 overflow-hidden">
        <DisplayImage src="/images/apartment.jpg" alt="Apartment" className="w-full h-full object-cover" />
      </div>
      <div className="md:ml-10">
        <ApartmentInfo />
      </div>
    </section>
  );
};

export default ListYourApartment;
