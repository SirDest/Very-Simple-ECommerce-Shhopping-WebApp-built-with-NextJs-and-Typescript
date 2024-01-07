import React from "react";
import WomenCard from "./WomenCard";
import WomenText from "./WomenText";

const page = () => {
  return (
    <div className="w-full h-fit lg:pt-20 pt-40">
      <WomenText />
      <WomenCard />
    </div>
  );
};

export default page;
