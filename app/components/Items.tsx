import menBg from "@/public/menstore.jpg";
import womensBG from "@/public/womenstore.jpg";
import Image from "next/image";

const Items = () => {
  return (
    <div className="w-full h-fit md:h-screen flex flex-col lg:flex-row justify-center font-serif">
      <div className="md:w-1/3 w-full h-full flex flex-col text-left px-5 py-36 gap-2">
        <p className="text-left leading-relaxed text-black text-lg font-bold border-b border-green-600 w-fit">
          Welcome
        </p>
        <h1 className="font-bold text-black sm:text-5xl md:mb-8 text-6xl">
          A few words about us
        </h1>
        <p className="text-left leading-relaxed text-gray-600 text-lg md:pr-0 pr-8 italic">
          You can select from range of items and shop to your satisfaction
        </p>
        <button className="text-black w-fit px-5 py-2 gap-2 items-center border-2 border-green-600 outline-none ease-in-out duration-300 hover:border-white hover:bg-green-600">
          SHOP MORE
        </button>
      </div>
      <div className="lg:w-2/3 w-full lg:h-full h-screen flex flex-col  gap-0 md:flex-row">
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative bg-[#507070]">
          <Image
            src={menBg}
            width={1000}
            height={1000}
            quality={100}
            alt="Men's Shopping"
            className="h-full object-cover brightness-50"
          />
          <div className="absolute top-[40%] px-6 text-white gap-3">
            <h1 className="font-bold text-white lg:text-5xl text-2xl mb-4">
              MEN
            </h1>
            <p className="italic lg:text-lg text-sm text-gray-300 mb-4">
              You can select items from a range of variety of male items
            </p>
            <button className="w-fit px-5 py-2 gap-2 items-center border-2 border-green-600 outline-none ease-in-out duration-300 hover:border-green-600 text-white hover:bg-green-600">
              MENS ITEMS
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 relative bg-[#482350]">
          <Image
            src={womensBG}
            width={1000}
            height={1000}
            quality={100}
            alt="Men's Shopping"
            className="h-full object-cover brightness-50"
          />
          <div className="absolute top-[40%] px-6 text-white gap-3 ">
            <h1 className="font-bold text-white lg:text-5xl text-2xl mb-4">
              WOMEN
            </h1>
            <p className="italic lg:text-lg text-sm text-gray-300 mb-4">
              You can select items from a range of variety of male items
            </p>
            <button className="w-fit px-5 py-2 gap-2 items-center border-2 border-green-600 outline-none ease-in-out duration-300 hover:border-green-600 text-white hover:bg-green-600">
              WOMENS ITEMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
