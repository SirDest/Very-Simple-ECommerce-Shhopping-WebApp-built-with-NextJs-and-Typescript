// "use client";
import { ProductType } from "@/typings";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType[] = await res.json();
  // const productData = data.slice(0, 9);
  return data;
};

const ProductsCard = async () => {
  const product = await products();

  // const [response, setResponse] = useState([]);

  // // useEffect(() => {
  // //   const getResponse = async () => {
  // //     const res = await fetch("https://fakestoreapi.com/products");
  // //     const data: any = await res.json();
  // //     setResponse(data);
  // //   };
  // //   getResponse();
  // // }, []);
  // // console.log(response);

  return (
    <div className="h-fit w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 gap-5">
      {product.map(
        ({
          title,
          id,
          category,
          description,
          image,
          price,
          rating: { rate, count },
        }) => (
          <div
            key={id}
            className="h-[300px] flex flex-col rounded-lg bg-white hover:scale-110 hover:bg-gray-200 ease-in-out duration-500 cursor-pointer p-2"
          >
            <div
              className="h-[200px] rounded-xl"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              // style={{ whiteSpace: "normal", overflow: "visible" }}
              className="text-[14px] text-black truncate mt-2 hover:whitespace-normal hover:overflow-visible"
            >
              {title}
            </div>
            <div className="flex justify-between text-[12px]">
              <div className=" flex gap-2 items-center">
                <span className="text-orange-500">
                  <FaStar />
                </span>
                {rate}
              </div>
              <div>{count} sold</div>
            </div>
            <div className="text-[13px] text-black">
              $<span className="font-bold text-[20px]">{price}</span>
            </div>
          </div>
        )
      )}
      {/* <div className="bg-red-500 h-[100px]"></div>
      <div className="bg-blue-500 h-[100px]"></div>
      <div className="bg-red-500 h-[100px]"></div>
      <div className="bg-blue-500 h-[100px]"></div>
      <div className="bg-red-500 h-[100px]"></div>
      <div className="bg-blue-500 h-[100px]"></div>
      <div className="bg-red-500 h-[100px]"></div>
      <div className="bg-blue-500 h-[100px]"></div>
      <div className="bg-red-500 h-[100px]"></div> */}
    </div>
  );
};

export default ProductsCard;
