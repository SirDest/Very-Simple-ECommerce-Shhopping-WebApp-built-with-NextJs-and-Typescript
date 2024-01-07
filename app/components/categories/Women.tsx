import Image from "next/image";
import womenimg from "@/public/women1.jpg";
import womenshoes from "@/public/womneshoes.jpg";

const Women = () => {
  return (
    <div className="w-full h-fit lg:h-screen mt-[190px] lg:mt-[30px]">
      <div className="w-full h-fit md:h-fit lg:h-full flex flex-col lg:flex-row justify-between font-serif">
        <div className="md:w-1/3 w-full h-full flex flex-col text-left px-5 pt-20 gap-2">
          <p className="text-left leading-relaxed uppercase text-black text-lg font-bold border-b border-green-600 w-fit">
            WOMEN
          </p>
          <h1 className="font-bold text-black sm:text-5xl md:mb-8 text-6xl">
            ALWAYS ON TOP
          </h1>
          <p className="text-left leading-relaxed text-gray-600 text-lg md:pr-0 pr-8 italic">
            Is it bags? Latest designers? Night dresses? You can get it in our
            store.
          </p>
          <a
            href="/women"
            className="text-black w-fit px-5 py-2 gap-2 items-center border-2 border-green-600 outline-none ease-in-out duration-300 hover:border-white hover:bg-green-600"
          >
            SHOP NOW
          </a>
        </div>
        <div className="lg:w-2/3 w-full h-[50vh] lg:h-screen flex flex-row lg:flex-col relative gap-0 md:flex-row mt-10 lg:mt-0">
          <div className="lg:w-1/3 w-1/2 h-full lg:h-[80%] lg:absolute bg-none lg:right-14 lg:top-10 lg:z-10 bg[#e2e8eb]">
            <div className=" w-full h-full">
              <Image
                src={womenshoes}
                width={1000}
                height={1000}
                quality={100}
                alt="Men's Shopping"
                className="h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3 w-1/2 h-full bg-[#7a6c61]">
            <Image
              src={womenimg}
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

export default Women;
