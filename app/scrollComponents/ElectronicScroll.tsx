import React from "react";

const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  console.log(data);
};

const ElectronicScroll = () => {
  return <div>ElectronicScroll</div>;
};

export default ElectronicScroll;
