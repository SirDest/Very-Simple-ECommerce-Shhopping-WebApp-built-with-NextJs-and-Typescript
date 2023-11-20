import { ProductType } from "@/typings";
import Image from "next/image";
import React from "react";

import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";

const products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType = await res.json();
  return data;
};

const ProductsCard = async () => {
  const product = await products();
  const { id, title, image, price, description, category, rating } = product;

  return (
    <div className="mt-10 gap-[80px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <div className="relative">
        <a href="/">
          <div className="card bg-none group h-[490px] rounded-[6px]">
            <div className="h-fit w-full text-center">
              <Image
                alt={title}
                width={300}
                height={400}
                src={image}
                // placeholder="blur"
                // src={bodyImg}
                className="w-full h-[370px] object-cover relative group-hover:scale-105 ease-in-out duration-500"
              />
            </div>
            <div className="w-full">
              <p className="text-[12px] mt-4 text-gray-400 leading-[15.62px]">
                USA
                <span data-testid="movie-release-date">datere</span>
              </p>
              <p
                data-testid="movie-title"
                className="text-[18px] mt-2 font-extrabold leading-[23.44px] text-gray-900"
              >
                {title}
              </p>
              <div className="flex w-full mt-3 justify-between">
                <div className="flex text-center justify-center items-center">
                  <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[18px]" />
                  <p className="text-[12px] ml-2">
                    <span>{price}</span>/10
                  </p>
                </div>
                <div className="flex text-center justify-center items-center">
                  <GiTomato className="bg-none border-none outline-none text-red-600 text-[18px]" />
                  <p className="text-[12px] ml-2">97%</p>
                </div>
              </div>
              <p className="text-[12px] mt-3 text-gray-400 leading-[15.62px]">
                Action, Adventure, Horror
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductsCard;
