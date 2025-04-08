import React from "react";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";


const DisplayPropertyInfo: React.FC = () => {
    return (
        <div >
            <p className="text-black ml-20">Have more than 5 units?</p>
            <DisplayHeading text="List Your Apartment Community" className="!text-gray-950 !text-2xl w-80 mt-2 text-center" />
            <div className="w-8 h-1 bg-blue-600 mx-auto my-2 mt-6 ml-36"></div>
            <DisplayParagraph className="!text-black !mt-5 text-sm w-80 text-center ">
                Amplify your property's digital presence with increased reach and visibility to
                <span className="font-semibold"> 45+ million monthly visitors </span> on the Rent. Network.
            </DisplayParagraph>

        </div>
    );
};


export default DisplayPropertyInfo;
