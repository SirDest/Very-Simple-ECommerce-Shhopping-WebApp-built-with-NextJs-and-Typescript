import React from "react";
import ProductsCard from "./ProductsCard";
import ProductsText from "./ProductsText";

const Products = () => {
  return (
    <div className="w-full h-fit lg:pt-20 pt-40">
      <ProductsText />
      <ProductsCard />
    </div>
  );
};

export default Products;
