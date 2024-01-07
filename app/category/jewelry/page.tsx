import React from "react";
import JewelryCard from "./JewelryCard";
import JewelryText from "./JewelryText";

const page = () => {
  return (
    <div className="w-full h-fit lg:pt-20 pt-40">
      <JewelryText />
      <JewelryCard />
    </div>
  );
};

export default page;
