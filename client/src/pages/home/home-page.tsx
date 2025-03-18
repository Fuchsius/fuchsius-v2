import Header from "@/components/header";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="my-container">
        <div className=" min-h-dvh flex items-center justify-center relative">
          <h1 className=" uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[198px] font-redHatDisplay font-extrabold text-center bg-gradient-to-r from-my-black via-my-lightpurple to-my-black bg-clip-text text-transparent">
            FUCHSIUS
          </h1>

          <img
            src="/logo.svg"
            alt="Fuchsius"
            className="absolute w-36 sm:w-48 md:w-60 lg:w-72 xl:w-auto"
          />

          <button className=" rounded-full bg-my-purple/25 p-[5px] absolute top-60 left-0">
            <div className=" border border-my-purple px-2.5 py-[5px] rounded-full">
              Next-Level Website
            </div>
          </button>

          <div className="text-3xl md:text-4xl xl:text-5xl absolute bottom-20 left-0 font-redHatDisplay font-semibold">
            Boost Efficiency,
            <br /> Maximize{" "}
            <span className=" text-my-lightpurple">Profit.</span>
          </div>

          <div className=" max-w-[300px] absolute bottom-48 right-0 flex flex-col items-start gap-8">
            <p className=" text-lg lg:text-xl">
              Use our AI tools to automate tasks, cut costs, and enhance your
              bottom line.
            </p>

            <button className=" px-5 py-4 font-semibold">Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
