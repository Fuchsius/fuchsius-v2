import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GradientButton from "./GradientButton";

interface Service {
  title: string;
  description: string;
}

interface GradientButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

interface ServicesCarouselProps {
  services: Service[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine number of visible items based on screen size
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, visibleItems, services.length]);

  const goToPrev = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, services.length - visibleItems) : prev - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) =>
      prev >= services.length - visibleItems ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-12 md:py-16 lg:py-24">
      <div className="my-container w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="uppercase text-3xl font-semibold font-redHatDisplay leading-10">
            Our Service
          </div>

          <div className="flex gap-5">
            <div
              className="border border-my-purple text-my-purple w-12 h-12 max-h-12 max-w-12 rounded-full flex items-center justify-center hover:shadow-myshadow1 transition-all cursor-pointer"
              onClick={goToPrev}
            >
              <FaArrowLeft />
            </div>
            <div
              className="border border-my-purple text-my-purple w-12 h-12 max-h-12 max-w-12 rounded-full flex items-center justify-center hover:shadow-myshadow1 transition-all cursor-pointer"
              onClick={goToNext}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div ref={carouselRef} className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              width: `${(services.length / visibleItems) * 100}%`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="px-4 transition-opacity duration-300"
                style={{ width: `${(100 / services.length) * visibleItems}%` }}
              >
                <div className="border-2 border-my-purple rounded-lg py-12 px-6 md:px-10 lg:px-16 flex flex-col h-full transition-all min-h-64 md:min-h-80 lg:min-h-96">
                  <div className="text-2xl lg:text-3xl font-semibold font-redHatDisplay leading-10 text-center">
                    {service.title}
                  </div>
                  <p className="text-center mt-5">{service.description}</p>
                  <GradientButton
                    text="Learn More"
                    className="mt-auto mx-auto"
                    size="md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-8">
          {Array.from({
            length: Math.ceil(services.length - visibleItems + 1),
          }).map((_, index) => (
            <button
              key={index}
              className={`h-2 mx-1 rounded-full transition-all ${
                currentIndex === index ? "w-6 bg-my-purple" : "w-2 bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
