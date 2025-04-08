import React from "react";
import DisplayStoreButtons from "../../atoms/DisplayStoreButtons";
import { DisplayFeatureCard } from "../../molecules/NavBarListProperties";

const DisplayFeatureSection: React.FC = () => {
  return (
    <section className=" py-24 flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold">Less Stress to Your Next Signed Lease</h2>
      <div className="flex justify-center gap-40">
        <DisplayFeatureCard src="/assets/icons/myicon.svg" text="The right leads at the right price" className="bg-indigo-200 " iconColor=" text-indigo-700"/>
        <DisplayFeatureCard src="/assets/icons/myeye.svg" text="Target high intent renters" className="bg-blue-200" iconColor=" text-blue-700"/>
        <DisplayFeatureCard src="/assets/icons/box.svg" text="Get more value from your listings" className="bg-violet-200" iconColor=" text-violet-700"/>
      </div>
      <DisplayStoreButtons text="List on Redfin" onClick={() => alert("Redirecting to blog...")} className="!mt-10 !w-36  !bg-blue-500" />
    </section>
  );
};

export default DisplayFeatureSection;
