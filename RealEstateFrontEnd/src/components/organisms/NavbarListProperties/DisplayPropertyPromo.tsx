import React from "react";
import { DisplayImage } from "../../atoms/DisplayImage";
import { DisplayPropertyInfo } from "../../molecules/NavBarListProperties";
import DisplayStoreButtons from "../../atoms/DisplayStoreButtons";
import ApartmentImage from "../../ui/assets/images/apartment-community.webp"
import { ArrowRight } from "react-feather";

const DisplayPropertyPromo: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row  ml-44 gap-8 py-24 rounded-lg">
            <div className="md:w-2/3 flex justify-center">
                <DisplayImage
                    src={ApartmentImage}
                    alt="Apartment"
                />
            </div>
            <div className="">
                <DisplayPropertyInfo />
                <div className="flex justify-center md:justify-start ml-24 w-96">
                    <DisplayStoreButtons className="flex flex-row gap-2 justify-center"
                        text="Get Started"
                        onClick={() => alert("Redirecting...")}
                        icon={
                            <div className="bg-white rounded-full  shadow-sm mt-1 ">
                                <ArrowRight className="w-4 h-4 text-blue-800" />
                            </div>
                        }
                    />

                </div>
            </div>
        </div>
    );
};

export default DisplayPropertyPromo;
