import Image from "next/image";
import gadgets from "@/public/gadgets.jpg";
import electonics from "@/public/electronicsstore.jpg";

const Electronics = () => {
  return (
    <div className="w-full h-fit lg:h-screen lg:mt-[30px]">
      <div className="w-full h-fit md:h-screen flex flex-col lg:flex-row justify-between font-serif">
        <div className="md:w-1/3 w-full h-full flex flex-col text-left px-5 pt-36 pb-4 gap-2">
          <p className="text-left leading-relaxed uppercase text-black text-lg font-bold border-b border-green-600 w-fit">
            ELECTRONICS
          </p>
          <h1 className="font-bold text-black sm:text-5xl md:mb-8 text-6xl">
            UP TO DATE
          </h1>
          <p className="text-left leading-relaxed text-gray-600 text-lg md:pr-0 pr-8 italic">
            When it commes to jewelries, we got you covered. You can get the
            latest and most valuable jewelries from our store.
          </p>
          <a
            href="/electonics"
            className="text-black w-fit px-5 py-2 gap-2 items-center border-2 border-green-600 outline-none ease-in-out duration-300 hover:border-white hover:bg-green-600"
          >
            SHOP NOW
          </a>
        </div>
        <div className="lg:w-2/3 w-full h-[50vh] lg:h-screen flex flex-row lg:flex-col relative gap-0 md:flex-row lg:mt-0">
          <div className="w-1/2 h-full lg:h-[80%] lg:w-fit lg:absolute bg-none lg:right-[300px] lg:top-10 lg:z-10 bg[#787878]">
            <div className="lg:w-2/3 w-full h-full">
              <Image
                src={gadgets}
                width={1000}
                height={1000}
                quality={100}
                alt="Men's Shopping"
                className="h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3 w-1/2 h-full lg:absolute lg:right-0 bg-black">
            <Image
              src={electonics}
              width={1000}
              height={1000}
              quality={100}
              alt="Men's Shopping"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
