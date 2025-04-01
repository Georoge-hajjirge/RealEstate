import React from "react";
import { DisplayHeading } from "../../atoms/DisplayHeading";
import DisplayParagraph from "../../atoms/DisplayParagraph";
import DisplayTipCard from "../../molecules/DisplayTipCard";
import DisplayStoreButtons from "../../atoms/DisplayStoreButtons";
import womanWriting from "../../ui/assets/images/woman-writing-in-journal.webp";
import manOnComputer from "../../ui/assets/images/man-on-computer.webp";
import calculator from "../../ui/assets/images/calculator.webp";
import "../../../styles/dotsBackground.scss";
const tips = [
  {
    image: womanWriting,
    title: "11 Steps to Follow When Renting an Apartment",
    description: "Apartment hunting can be exciting, yet overwhelming. Simplify the task by getting organized."
  },
  {
    image: calculator,
    title: "Rent Calculator: How Much Should You Spend on Rent?",
    description: "Let us know your income, expenses, and location. We'll help you find the right rent budget."
  },
  {
    image: manOnComputer,
    title: "The Best US Cities for Hybrid Work",
    description: "See where America's hybrid workers are living and thriving."
  }
];

const DisplayTipsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black p-8 rounded-lg ">
      <div className="tips-text ml-32">
        <div className=" ml-28 flex-col items-center p-6 mt-44 ">
          <DisplayHeading text="Renter tips and" highlight=" insights" className="!text-5xl w-[80%] " />
          <DisplayParagraph text="Advice from our experts to help you along your rental journey." className="!w-72 text-base mt-6 " />
          <DisplayStoreButtons text="Visit Rent Blog" onClick={() => alert("Redirecting to blog...")} />
        </div>

      </div>

      <div className="flex flex-col gap-6 mr-32 ml-8">
        {tips.map((tip, index) => (
          <DisplayTipCard key={index} image={tip.image} title={tip.title} description={tip.description} />
        ))}
      </div>
    </section>
  );
};

export default DisplayTipsSection;
