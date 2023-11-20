import React from "react";
import ProductsCard from "./ProductsCard";
import Header from "../components/Headers/Header";
import ResHeader from "../components/Headers/ResHeader";

const Products = () => {
  return (
    <div className="flex flex-col h-fit">
      <div className="flex flex-col w-full bg-red-600 absolute h-fit">
        <Header />
        <ResHeader />
      </div>
      <ProductsCard />
    </div>
  );
};

export default Products;
