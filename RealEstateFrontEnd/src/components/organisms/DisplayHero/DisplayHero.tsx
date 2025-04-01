import React from "react";
import homePageBanner from "../../ui/assets/images/homePageBanner.webp"; 

const DisplayHero: React.FC = () => {
  return (
    <div
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${homePageBanner})` }} 
    >
      <div className="inset-0 bg-black bg-opacity-30 z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl md:text-5xl font-bold text-center font-sans">
          Find your perfect place.
        </h1>
        <div className="mt-6 w-[450px] max-w-xl flex items-center bg-white rounded-md shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="City, Neighborhood, ZIP"
            className="w-4/5 px-5 py-4 text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700 mr-1">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayHero;
