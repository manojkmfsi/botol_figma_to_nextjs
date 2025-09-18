"use client";
import { useState } from "react";

export default function FAQSection() {
  const [expandedItem, setExpandedItem] = useState(0);

  const faqItems = [
    {
      id: 1,
      number: "01",
      question: "Where can I watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
      isExpanded: true,
    },
    {
      id: 2,
      number: "02",
      question: "Where can I watch2?",
      answer: "",
      isExpanded: false,
    },
    {
      id: 3,
      number: "03",
      question: "Where can I watch?",
      answer: "",
      isExpanded: false,
    },
    {
      id: 4,
      number: "04",
      question: "Where can I watch?",
      answer: "",
      isExpanded: false,
    },
  ];

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <section className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px] bg-background-tertiary">
      <div className="w-full py-[40px] sm:py-[60px] lg:py-[80px]">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            {faqItems?.map((item, index) => (
              <div
                key={item?.id}
                className={`w-full bg-background-primary ${
                  index === 0
                    ? "rounded-t-lg sm:rounded-t-xl lg:rounded-t-[24px]"
                    : index === faqItems?.length - 1
                      ? "rounded-b-lg sm:rounded-b-xl lg:rounded-b-[24px]"
                      : ""
                } ${index < faqItems?.length - 1 ? "border-b border-solid border-border-light" : ""}`}
              >
                <div className="px-[30px] sm:px-[45px] lg:px-[60px] py-[23px] sm:py-[34px] lg:py-[46px]">
                  {/* Header Row */}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-[26px] sm:gap-[39px] lg:gap-[52px]">
                      <span
                        className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold leading-[29px] sm:leading-[44px] lg:leading-[59px] text-muted"
                        style={{ fontFamily: "Inter" }}
                      >
                        {item?.number}
                      </span>
                      <h3
                        className="text-[16px] sm:text-[24px] lg:text-[32px] font-bold leading-[20px] sm:leading-[30px] lg:leading-[40px] text-secondary"
                      >
                        {item?.question}
                      </h3>
                    </div>

                    <button
                      onClick={() => toggleExpand(index)}
                      className={`w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] lg:w-[48px] lg:h-[48px] rounded-lg sm:rounded-xl lg:rounded-[24px] flex items-center justify-center p-[7px] sm:p-[10px] lg:p-[14px] ${
                        expandedItem === index
                          ? "bg-[linear-gradient(90deg,#00d1ff_0%,_#1983ff_100%)]"
                          : "bg-background-tertiary"
                      }`}
                      aria-expanded={expandedItem === index}
                      aria-label={
                        expandedItem === index ? "Collapse" : "Expand"
                      }
                    >
                      <img
                        src={
                          expandedItem === index
                            ? "/images/img_xmark.svg"
                            : "/images/img_plus.svg"
                        }
                        alt={expandedItem === index ? "Collapse" : "Expand"}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedItem === index && item?.answer && (
                    <div className="mt-[15px] sm:mt-[22px] lg:mt-[30px] ml-[50px] sm:ml-[75px] lg:ml-[100px]">
                      <p
                        className="text-[12px] sm:text-[16px] lg:text-[20px] font-normal leading-[17px] sm:leading-[21px] lg:leading-[28px] text-accent"
                      >
                        {item?.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
