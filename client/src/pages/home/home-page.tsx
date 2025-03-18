import Header from "@/components/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="my-container">
        <div className=" min-h-dvh border flex items-center justify-center">
          <h1 className=" uppercase text-[198px] font-redHatDisplay font-extrabold text-center bg-gradient-to-r from-[#0C0618] via-[#D09BFF] to-[#0C0618] bg-clip-text text-transparent">
            FUCHSIUS
          </h1>

          <img src="/logo.svg" alt="Fuchsius" className="absolute" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
