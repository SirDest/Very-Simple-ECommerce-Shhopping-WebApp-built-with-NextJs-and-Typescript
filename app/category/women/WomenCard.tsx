import { ProductType } from "@/typings";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const products = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  const data: ProductType[] = await res.json();
  return data;
};

const WomenCard = async () => {
  const product = await products();

  return (
    <div className="h-fit w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-4 md:px-6 lg:px-16 gap-5">
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
            className="h-[300px] flex flex-col rounded-lg bg-white group hover:scale-110 overflow-hidden hover:bg-gray-200 ease-in-out duration-500 cursor-pointer p-2"
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
              className="text-[13px] text-black truncate mt-2 group-hover:whitespace-normal group-hover:overflow-visible"
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
    </div>
  );
};

export default WomenCard;
