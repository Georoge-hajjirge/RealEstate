import React from "react";
import DisplayFooterNavSection from "../../../molecules/Footer/DisplayFooterNavSection";
import DisplayFooterSocialIcons from "../../../molecules/Footer/DisplayFooterSocialIcons";
import { DisplayHeading } from "../../../atoms/DisplayHeading";


const DisplayWebsiteFooter: React.FC = () => {

    const companyLinks = [
        { text: "About Us", href: "#" },
        { text: "Press & Media", href: "#" },
        { text: "Redfin.com", href: "#" },
        { text: "Rent Blog", href: "#" },
        { text: "Rent Research", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Do Not Share or Sell My Personal Information", href: "#" },
    ];

    const searchLinks = [
        { text: "Apartments for Rent Near Me", href: "#" },
        { text: "Houses for Rent Near Me", href: "#" },
        { text: "1 Bedroom Apartments Near Me", href: "#" },
        { text: "Studio Apartments Near Me", href: "#" },
        { text: "Cheap Houses Near Me", href: "#" },
        { text: "Luxury Apartments Near Me", href: "#" },
        { text: "Pet Friendly Apartments Near Me", href: "#" },
    ];

    const helpLinks = [
        { text: "Download App", href: "#" },
        { text: "Avoid Scams", href: "#" },
        { text: "List a Property", href: "#" },
        { text: "Business Solutions", href: "#" },
        { text: "Site Map", href: "#" },
        { text: "Accessibility", href: "#" },
        { text: "Rental Price Estimator", href: "#" },
    ];

    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center">
                    <DisplayHeading
                        className="text-center mb-4"
                        text={
                            <>
                                <span className="text-white text-5xl">Rent</span>
                                <span className="text-blue-500 text-5xl">.</span>
                            </>
                        }
                    />
                </div>

                <DisplayFooterSocialIcons />

                <div className="grid grid-cols-6 md:grid-cols-3  mt-6 ">
                    <DisplayFooterNavSection title="Our Company" links={companyLinks} />
                    <DisplayFooterNavSection title="Popular Searches" links={searchLinks} />
                    <DisplayFooterNavSection title="Let Us Help" links={helpLinks} />
                </div>

                <div className="text-xs mt-6 ">
                    <p className="w-80 text-center mx-auto font-semibold">
                        Download the Rent. app for <a href="#" className="text-blue-400 hover:underline">Android</a> and <a href="#" className="text-blue-400 hover:underline">iOS</a>.
                    </p>
                    <p className=" mt-2 text-[10px] w-64 mx-auto font-semibold">
                        © 2025 Rent Group Inc. All rights reserved.{" "}
                        <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>,{" "}
                        <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and{" "}
                        <a href="#" className="text-blue-400 hover:underline">MLS Disclosures</a>.
                    </p>
                    <p className="mt-2 text-[13px] w-[470px] mx-auto">
                        If you are using a screen reader, or are having difficulty reading this website, please email{" "}
                        <a href="mailto:accessibilityfeedback@rent.com" className="text-blue-400 hover:underline">
                            accessibilityfeedback@rent.com
                        </a>.
                    </p>
                    <div className="ml-10">
                    <p className="mt-4 text-[11px] w-[600px] mx-auto text-center">
                        Rent Group, operator of Rent., is committed to and abides by the Fair Housing Act and Equal Opportunity Act.
                    </p>
                    <p className=" text-[11px] w-[600px] ml-[208px] text-center">

                        Read our <a href="#" className="text-blue-400 hover:underline">Fair Housing Policy</a> and{" "}
                        <a href="#" className="text-blue-400 hover:underline">The New York State Fair Housing Notice</a>.

                    </p>
                    </div>
                   

                </div>
            </div>
        </footer>
    );
};

export default DisplayWebsiteFooter;
