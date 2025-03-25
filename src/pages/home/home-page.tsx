import Header from "@/components/header";
import ServicesCarousel from "@/components/ServicesCarousel";
import { SERVICES } from "@/data/services.data";
import { EmblaOptionsType } from "embla-carousel";
import { CiGlobe } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { FaRegLaugh } from "react-icons/fa";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ReviewCarousel from "@/components/ReviewsCarousel";
import ProductShowcase from "./ProductShowcase";
import HeroSection from "./hero-section";

export const LOGOS = [
  "/assets/logos/travelgate.svg",
  "/assets/logos/prabhu.svg",
  "/assets/logos/traveltribe.svg",
  "/assets/logos/kingswood.svg",
];

export const OUR_TEAM = [
  {
    name: "Tharindu Kulasignhe",
    role: "CEO/Founder",
    image: "/assets/team/1.png",
  },
  {
    name: "Nadeesha Jayawickrama",
    role: "Project Manager",
    image: "/assets/team/2.png",
  },
  {
    name: "Kalana Didulanga",
    role: "Full Stack Developer",
    image: "/assets/team/3.png",
  },
  {
    name: "Didul Adeesha",
    role: "UI UX Designer",
    image: "/assets/team/4.png",
  },
];

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Header />

      <HeroSection />

      <section id="about" className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-x-24 gap-y-8">
            {/* Image and overlay section */}
            <div className="w-full max-w-xl mx-auto relative aspect-square">
              <img
                className="w-[80%] aspect-square object-cover rounded-xl"
                src="https://placehold.co/323x332"
                alt="About Us"
              />
              <div className="w-full p-12 absolute max-w-md bottom-0 right-0 bg-slate-900/80 backdrop-blur-md rounded-[20px]">
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
            <div className="w-full flex flex-col justify-start items-start gap-3 md:gap-5 mt-8 lg:mt-0">
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
      </section>

      <ServicesCarousel services={SERVICES} />

      <div className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container">
          <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 lg:gap-x-8">
            {/* Left Column */}
            <div className="flex flex-col gap-y-8 w-full">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                Why choose us
              </div>
              <div className="self-stretch">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  We Deal With The
                  <br className="hidden md:block" />
                  Aspects Professional
                  <br className="hidden md:block" />
                </span>
                <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  IT Solution.
                </span>
              </div>

              <div className="w-full">
                <img
                  src="/assets/images/image1.svg"
                  alt="Fuchsius"
                  className="w-10/12 object-cover"
                />
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="w-full lg:h-auto relative flex justify-center items-center py-16 md:py-20 lg:py-0">
              <div className="flex flex-col gap-y-8 md:gap-y-12 z-20 w-full">
                {/* First row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">
                      Big Data Analysis
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">
                      High Quality Security
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                </div>

                {/* Second row - with offset on larger screens */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full md:ml-0 lg:-ml-32">
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">
                      24/7 Online Support
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">
                      24/7 Support Team
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                </div>

                {/* Third row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-8 w-full">
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">
                      Business Improvement
                    </div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 rounded-lg shadow-myshadow1 py-5 w-full md:w-80 bg-bg1">
                    <div className="text-lg font-semibold">Easy Solutions</div>
                    <div className="w-12 h-12 flex-shrink-0 border border-my-purple bg-my-purple/20 rounded-full flex items-center justify-center text-white">
                      <CiGlobe size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12">
        <div className="my-container w-full">
          <div className=" bg-gradient-to-b from-my-purple2 via-my-lightpurple to-my-purple px-[1px] rounded-lg w-full">
            <div className=" w-full h-full p-8 bg-my-black rounded-lg">
              <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className=" flex items-center gap-4">
                  <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <FaRegCalendarCheck size={32} />
                  </div>
                  <div className=" flex flex-col">
                    <div className=" font-semibold text-3xl">3+</div>
                    <div>Year Of experience</div>
                  </div>
                </div>
                <div className=" flex items-center gap-4">
                  <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <AiOutlineSafety size={32} />
                  </div>
                  <div className=" flex flex-col">
                    <div className=" font-semibold text-3xl">20+</div>
                    <div>Project Complete</div>
                  </div>
                </div>
                <div className=" flex items-center gap-4">
                  <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <RiGroupLine size={32} />
                  </div>
                  <div className=" flex flex-col">
                    <div className=" font-semibold text-3xl">10+</div>
                    <div>Team Members</div>
                  </div>
                </div>
                <div className=" flex items-center gap-4">
                  <div className=" text-white bg-my-purple w-24 h-24 flex items-center justify-center rounded-lg">
                    <FaRegLaugh size={32} />
                  </div>
                  <div className=" flex flex-col">
                    <div className=" font-semibold text-3xl">30+</div>
                    <div>Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />

      <ProductShowcase />

      <section id="testimonials" className="w-full relative">
        <img
          src="/assets/images/bg3.svg"
          alt="bg3"
          className=" absolute h-full w-full inset-0"
        />
        <div className="my-container py-12 md:py-16 lg:py-24">
          <div className="flex flex-col w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-y-8 w-full">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                Testimonials
              </div>
            </div>
            <div className=" w-full mt-8">
              <ReviewCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 md:py-16 lg:py-24">
        <div className="my-container">
          <div className="flex flex-col w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-y-8 w-full">
              <div className="uppercase text-xl font-semibold tracking-wide text-my-purple">
                our team
              </div>
              <div className="self-stretch">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  Our Special
                </span>
                <span className="text-purple-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-3 font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px]">
                  Team.
                </span>
              </div>
            </div>
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {OUR_TEAM.map((member, index) => (
                <div
                  className=" flex flex-col gap-4 w-full max-w-md mx-auto"
                  key={index}
                >
                  <div className=" border border-my-purple w-full overflow-hidden rounded-lg aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className=" w-full h-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className=" w-full">
                    <div className=" text-xl md:text-2xl lg:text-3xl font-redHatDisplay leading-10">
                      {member.name}
                    </div>
                    <div className=" text-my-lightpurple md:text-lg lg:text-xl font-redHatDisplay">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-bg2">
        <div className="my-container w-full">
          <div className=" bg-gradient-to-b from-my-purple2 via-my-lightpurple to-my-purple px-[1px] rounded-lg w-full">
            <div className=" w-full h-full px-8 py-12 bg-bg2 rounded-lg">
              <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
                {LOGOS.map((logo, index) => (
                  <div
                    key={index}
                    className=" flex items-center justify-center"
                  >
                    <img src={logo} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
