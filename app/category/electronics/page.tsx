import React from "react";
import ElectronicsCard from "./ElectronicsCard";
import ElectronicsText from "./ElectronicsText";

const page = () => {
  return (
    <div className="w-full h-fit lg:pt-20 pt-40">
      <ElectronicsText />
      <ElectronicsCard />
    </div>
  );
};

export default page;
