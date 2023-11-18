import heroBg from "@/public/hero.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundColor: "#ffbd53",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen px-12 py-40 lg:py-0"
    >
      <div className="mb-6 flex  flex-col justify-center sm:mb-12 lg:mb-0 w-2/3 sm:w-1/2 font-serif lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
          TOP FASHION FOR A TOP PRICE
        </h1>
        <p className="max-w-md leading-relaxed text-gray-600 text-sm lg:text-lg italic">
          We have only the most exclusive and high quality products for you. We
          are the best so come and shop with us.
        </p>
      </div>
    </div>
  );
};

export default Hero;
