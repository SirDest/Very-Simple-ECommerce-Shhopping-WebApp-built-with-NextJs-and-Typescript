"use client";
import { ProductType } from "@/typings";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const ProductsCard = () => {
  const [product, setProduct] = useState([]);
  // const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
              <button className="absolute text-black p-2 hover:scale-110 ease-in-out duration-300 rounded-[50%] bg-white top-5 right-5 text-[25px] z-10">
                <MdAddShoppingCart />
              </button>
            </div>
            <div className="text-[13px] px-2 text-black truncate mt-2 group-hover:whitespace-normal group-hover:overflow-visible">
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
    </div>
  );
};

export default ProductsCard;
