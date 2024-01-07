import React from "react";
import MenCard from "./MenCard";
import MenText from "./MenText";

const page = () => {
  return (
    <div className="w-full h-fit lg:pt-20 pt-40">
      <MenText />
      <MenCard />
    </div>
  );
};

export default page;
