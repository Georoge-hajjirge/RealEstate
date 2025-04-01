import React from "react";
import { DisplayImage } from "../../atoms/DisplayImage";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";

interface DisplayTipCardProps {
    image: string;
    title: string;
    description: string;

}

const DisplayTipCard: React.FC<DisplayTipCardProps> = ({ image, title, description }) => {
    return (
        <div className="grid grid-cols-2 items-center mr-4 group cursor-pointer">

            <div className="flex justify-center ">
                <DisplayImage src={image} alt={title}
className="house-shape border-transparent transition-all duration-300 p-2 rounded-md group-hover:border-4 group-hover:border-blue-500"                />
            </div>

            <div className='flex flex-col'>
                <DisplayHeading text={title} />
                <DisplayParagraph text={description} />
            </div>

        </div>

    );
};

export default DisplayTipCard;
