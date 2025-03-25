import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const supportBoxesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const leftBallRef = useRef<HTMLDivElement>(null);
  const centerBallRef = useRef<HTMLDivElement>(null);
  const rightBallRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate left ball
    tl.fromTo(
      leftBallRef.current,
      {
        x: "-95%",
        y: "50%",
        scale: 0.8,
        rotation: -146.71,
        opacity: 0.7,
      },
      {
        x: "-75%",
        y: "-60%",
        scale: 1,
        rotation: -136.71,
        opacity: 0.9,
        duration: 8,
        ease: "power1.inOut",
      }
    )

      // Animate center ball
      .fromTo(
        centerBallRef.current,
        {
          scale: 0.9,
          rotation: -146.71,
          opacity: 0.7,
        },
        {
          scale: 1.1,
          rotation: -156.71,
          opacity: 0.9,
          duration: 3,
          ease: "power1.inOut",
        },
        0 // Start at the same time as previous animation
      )
      // Animate right ball
      .fromTo(
        rightBallRef.current,
        {
          x: "90%",
          y: "-50%",
          scale: 0.8,
          rotation: -146.71,
          opacity: 0.7,
        },
        {
          x: "30%",
          y: "60%",
          scale: 1,
          rotation: -136.71,
          opacity: 0.9,
          duration: 8,
          ease: "power1.inOut",
        },
        0 // Start at the same time as previous animation
      );

    // Main title animation
    gsap.fromTo(
      mainTitleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        rotate: -20,
        scale: 0.7,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      }
    );

    // Right content animation
    gsap.fromTo(
      rightContentRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1.1,
        ease: "power3.out",
      }
    );

    // Support boxes animation
    if (supportBoxesRef.current?.children) {
      gsap.fromTo(
        supportBoxesRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.7,
          delay: 1.3,
          ease: "power3.out",
        }
      );
    }

    // Background animation
    gsap.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <div className="w-full overflow-hidden relative">
      <div className="my-container">
        <div className="min-h-[calc(100vh-135px)] flex items-center justify-center relative">
          <h1
            ref={mainTitleRef}
            className="uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[198px] font-redHatDisplay font-extrabold text-center bg-gradient-to-r from-my-black via-my-lightpurple to-my-black bg-clip-text text-transparent"
          >
            FUCHSIUS
          </h1>

          <img
            ref={logoRef}
            src="/logo.svg"
            alt="Fuchsius"
            className="absolute w-36 sm:w-48 md:w-60 lg:w-72 xl:w-auto"
          />

          <button
            ref={buttonRef}
            className="rounded-full bg-my-purple/25 p-[5px] absolute top-64 lg:top-60 left-0 hover:shadow-xl hover:shadow-my-purple/50 transition-all z-10"
          >
            <div className="border border-my-purple px-2.5 py-[5px] rounded-full">
              Next-Level Website
            </div>
          </button>

          <div
            ref={subtitleRef}
            className="text-3xl md:text-4xl xl:text-5xl absolute bottom-5 lg:bottom-20 left-0 font-redHatDisplay font-semibold z-10"
          >
            Boost Efficiency,
            <br /> Maximize <span className="text-my-lightpurple">Profit.</span>
          </div>

          <div
            ref={rightContentRef}
            className="max-w-[400px] absolute bottom-32 right-0 flex flex-col items-start gap-5 lg:gap-8 z-10"
          >
            <p className="text-base md:text-lg lg:text-xl">
              We deliver tailored e-commerce, healthcare, and fintech solutions
              to drive your success.
            </p>

            <div className="bg-linear-to-b from-my-purple2 to-my-lightpurple2 p-[2px] rounded-[20px] shadow-2xl shadow-my-purple/50">
              <button className="px-5 py-3 md:py-4 font-semibold rounded-[20px] text-base md:text-lg lg:text-xl bg-[radial-gradient(ellipse_97.54%_50.91%_at_50.00%_2.46%,_#A052FF_0%,_#7300FF_100%)] cursor-pointer hover:-translate-y-1 transition-all">
                Discover More
              </button>
            </div>
          </div>

          <div
            ref={supportBoxesRef}
            className="absolute top-10 lg:top-16 right-5 space-y-5 z-10"
          >
            <div className="relative text-sm w-60 pb-3 hover:scale-125 cursor-pointer">
              <div className="max-w-[143px]">Future-Ready Strategies</div>
              <div className="absolute bottom-0">
                <img src="/assets/images/vector1.svg" alt="" />
              </div>

              <img
                src="/assets/images/arrow2.svg"
                className="absolute top-0 right-3 w-3 animate-bounce"
                alt="arrow"
              />
            </div>

            <div className="relative text-sm w-60 pb-3 cursor-pointer">
              <div className="max-w-[143px]">24/7 Customer Support</div>
              <div className="absolute bottom-0">
                <img src="/assets/images/vector1.svg" alt="" />
              </div>

              <img
                src="/assets/images/arrow2.svg"
                className="absolute top-0 right-3 w-3 rotate-45"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 z-0 overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-center">
          <div
            ref={leftBallRef}
            className="border object-left rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[160px] rounded-full w-80 h-80 mix-blend-lighten -translate-x-[75%] "
          />
          <div
            ref={centerBallRef}
            className="border object-center rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[114.55px] rounded-full w-[480px] h-64 mix-blend-lighten "
          />
          <div
            ref={rightBallRef}
            className="border object-right rotate-[-146.71deg] opacity-90 bg-gradient-to-l from-[#C60786] to-[#8400FF] 
          blur-[160px] rounded-full w-80 h-80 mix-blend-lighten translate-x-[75%] "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
