import React from "react";
import ProductScroll from "./ProductScroll";

const Products = () => {
  return (
    <div className="w-full h-fit mt-[80px] flex flex-col">
      <h1 className="text-5xl pb-3 md:mt-[140px] lg:mt-0 text-center font-bold font-serif m-auto border-b border-green-600 w-fit">
        Some of Our Products
      </h1>
      <ProductScroll />
    </div>
  );
};

export default Products;
