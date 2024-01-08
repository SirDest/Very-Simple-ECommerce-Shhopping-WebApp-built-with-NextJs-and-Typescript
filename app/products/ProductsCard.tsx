import { ProductType } from "@/typings";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType[] = await res.json();
  return data;
};

const ProductsCard = async () => {
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
            className="h-[300px] flex relative flex-col rounded-lg border border-gray-200 bg-white group hover:scale-110 overflow-hidden hover:bg-green-200 ease-in-out duration-500 cursor-pointer "
          >
            <div
              className="h-[200px]"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute text-white p-2 hover:scale-110 ease-in-out duration-300 rounded-[50%] bg-gray-600 top-5 right-5 text-[20px] z-10">
                <FaCartPlus />
              </div>
            </div>
            <div
              // style={{ whiteSpace: "normal", overflow: "visible" }}
              className="text-[13px] px-2 text-black truncate mt-2 group-hover:whitespace-normal group-hover:overflow-visible"
            >
              {title}
            </div>
            <div className="flex px-2 justify-between text-[12px]">
              <div className=" flex gap-2 items-center">
                <span className="text-orange-500">
                  <FaStar />
                </span>
                {rate}
              </div>
              <div>{count} sold</div>
            </div>
            <div className="text-[13px] px-2 text-black">
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
