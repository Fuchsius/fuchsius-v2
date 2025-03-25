import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define the structure for a single FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// FAQ Component
const FAQSection: React.FC = () => {
  // FAQ data - can be easily expanded or fetched from an external source
  const faqData: FAQItem[] = [
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Our process begins with a consultation to understand your needs, followed by a proposal, design phase, development, testing and finally, launch.",
    },
    {
      question: "What is your process for starting a new project?",
      answer:
        "We follow a comprehensive approach that includes initial consultation, requirement gathering, design, development, rigorous testing, and final deployment.",
    },
    {
      question: "Can you integrate third-party services into my website?",
      answer:
        "Yes, we specialize in seamless integration of various third-party services to enhance your website's functionality and user experience.",
    },
    {
      question: "Do you offer any guarantees or warranties on your work?",
      answer:
        "We provide comprehensive quality assurance, including post-launch support, bug fixes, and performance optimization to ensure your complete satisfaction.",
    },
  ];

  return (
    <div className=" w-full flex items-center justify-center py-24">
      <div className="w-full my-container">
        <div className="self-stretch text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-redHatDisplay leading-tight md:leading-snug lg:leading-[62.40px] mb-12">
          Questions About
          <span className="text-purple-300 ml-3">Service.</span>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQAccordion key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual FAQ Accordion Component
const FAQAccordion: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-my-purple/5 rounded-2xl border border-my-purple overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full 
          flex 
          justify-between 
          items-center 
          p-6 
          text-left 
          focus:outline-none 
          transition-colors 
          duration-300
            hover:text-my-lightpurple2
        "
      >
        <span
          className={` ${
            isOpen && "text-my-purple2"
          } text-base md:text-lg font-semibold`}
        >
          {question}
        </span>
        <ChevronDown
          className={`
            transition-transform 
            duration-300 
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          grid 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div
          className={`
          overflow-hidden 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="p-6 pt-0 text-gray-300 text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
