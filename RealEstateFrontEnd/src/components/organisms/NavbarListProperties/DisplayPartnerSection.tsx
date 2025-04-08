import React from "react";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";
import { DisplayPartnerLogos } from "../../molecules/NavBarListProperties";


const DisplayPartnerSection: React.FC = () => {
    return (
        <section className="flex justify-center items-center py-16 px-6 bg-white">
            <div className="flex flex-col items-center text-center ">
                <p className="text-gray-700 text-sm font-medium mb-2">Most trusted network</p>

                <DisplayHeading
                    text={
                        <>
                            <span className="block text-2xl font-semibold">Save Time by Reaching</span>
                            <span className="block text-2xl font-semibold">More Qualified Renter Leads</span>
                        </>
                    } className="!text-gray-950 !text-2xl !font-semibold !leading-tight !w-96"
                />

                <div className="w-8 h-1 bg-blue-600 mt-8 mb-8"></div>

                <DisplayParagraph className="!text-gray-800 text-sm leading-relaxed  font-semibold w-80">
                    Not all home seekers search alike. That's why we give you access to a variety of audiences.
                </DisplayParagraph>

                <DisplayParagraph className="!text-gray-800 text-sm leading-relaxed font-semibold w-80 mt-6">
                    Access close to <span className="font-bold">45+ million in-market home seekers</span> with our network of marketplaces: Rent., ApartmentGuide.com, and Redfin.
                </DisplayParagraph>
            </div>

            <div className="ml-12">
                <DisplayPartnerLogos />
            </div>
        </section>
    );
};

export default DisplayPartnerSection;
