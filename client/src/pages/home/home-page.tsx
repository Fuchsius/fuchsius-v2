import Header from "@/components/header";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className=" w-full overflow-x-auto relative">
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

            <button className=" rounded-full bg-my-purple/25 p-[5px] absolute top-64 lg:top-60 left-0 hover:shadow-xl hover:shadow-my-purple/50 transition-all z-10">
              <div className=" border border-my-purple px-2.5 py-[5px] rounded-full">
                Next-Level Website
              </div>
            </button>

            <div className="text-3xl md:text-4xl xl:text-5xl absolute bottom-5 lg:bottom-20 left-0 font-redHatDisplay font-semibold z-10">
              Boost Efficiency,
              <br /> Maximize{" "}
              <span className=" text-my-lightpurple">Profit.</span>
            </div>

            <div className=" max-w-[400px] absolute bottom-32 right-0 flex flex-col items-start gap-5 lg:gap-8 z-10">
              <p className="text-base md:text-lg lg:text-xl">
                We deliver tailored e-commerce, healthcare, and fintech
                solutions to drive your success.
              </p>

              <div className="bg-linear-to-b from-my-purple2 to-my-lightpurple2 p-[2px] rounded-[20px] shadow-2xl shadow-my-purple/50">
                <button className=" px-5 py-3 md:py-4 font-semibold rounded-[20px] text-base md:text-lg lg:text-xl bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#A052FF_0%,_#7300FF_100%)] cursor-pointer hover:-translate-y-1 transition-all">
                  Discover More
                </button>
              </div>
            </div>

            <div className="absolute top-24 lg:top-48 right-5 space-y-5 z-10">
              <div className=" relative text-sm w-60 pb-3">
                <div className=" max-w-[143px]">Future-Ready Strategies</div>
                <div className=" absolute bottom-0">
                  <img src="/assets/images/vector1.svg" alt="" />
                </div>

                <img
                  src="/assets/images/arrow2.svg"
                  className=" absolute top-0 right-3 w-3"
                  alt="arrow"
                />
              </div>

              <div className=" relative text-sm w-60 pb-3">
                <div className=" max-w-[143px]">24/7 Customer Support</div>
                <div className=" absolute bottom-0">
                  <img src="/assets/images/vector1.svg" alt="" />
                </div>

                <img
                  src="/assets/images/arrow2.svg"
                  className=" absolute top-0 right-3 w-3 rotate-45"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute w-full h-full top-0 z-0">
          <div className=" relative w-full h-full">
            <img
              src="/assets/images/bg1.svg"
              alt="bg-1"
              className=" object-cover h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-x-24 gap-y-8">
            {/* Image and overlay section */}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[320px] md:h-[370px]">
              <img
                className="w-full sm:w-64 md:w-72 lg:w-80 h-auto sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                src="https://placehold.co/323x332"
                alt="About Us"
              />
              <div className="w-full sm:w-72 md:w-80 lg:w-96 h-auto p-4 md:p-6 lg:p-8 absolute right-0 sm:right-auto sm:left-[140px] md:left-[180px]  bottom-0 sm:top-[160px] md:top-[180px] lg:top-[184px] bg-slate-900/80 backdrop-blur-md rounded-[20px]">
                <p className="text-sm md:text-base">
                  Leverage our AI tools to automate repetitive tasks, reduce
                  costs, and improve your bottom line seamlessly.
                </p>

                <div className=" flex gap-2 items-center mt-4 underline underline-offset-2">
                  Service <img src="/assets/images/CTAButton.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Text content section */}
            <div className="w-full lg:w-[45%] flex flex-col justify-start items-start gap-3 md:gap-5 mt-8 lg:mt-0">
              <div className="self-stretch text-violet-600 text-lg md:text-xl font-semibold font-['Poppins'] uppercase tracking-widest">
                About us
              </div>
              <div className="self-stretch">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  We Are Increasing
                  <br className="hidden md:block" />
                  Business Success with
                  <br className="hidden md:block" />
                </span>
                <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  IT Solution.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
