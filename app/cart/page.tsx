"use client";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <button
        onClick={handleCart}
        className="text-black text-2xl flex flex-row items-center outline-none ease-in-out duration-300  hover:scale-110"
      >
        <CiShoppingCart />
        <span className="m-auto text-center text-[15px] text-black">0</span>
      </button>

      <div
        onClick={handleCart}
        className={
          !showCart
            ? "hidden"
            : "absolute backdrop-blur bg-opacity-50 z-20 flex w-screen h-screen bg-transparent top-0 right-0 text-center items-center justify-center"
        }
      >
        <div className="bg-white w-full h-full lg:w-[600px] md:[h-800px] lg:h-[600px] flex relative">
          <button
            onClick={handleCart}
            className="absolute top-2 right-2 text-red-600 text-3xl"
          >
            <IoIosClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
