"use client";

import { motion, useScroll, useMotionValue, animate } from "framer-motion";
import * as React from "react";
import { useState, useEffect, useRef } from "react";

const ringVariance = {
  initial: { opacity: 1, scale: 0.6 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 2, delay: 1 },
      scale: { duration: 2, delay: 1 },
    },
  },
};
const textVariance = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 2, delay: 1 },
      scale: { duration: 2, delay: 1 },
    },
  },
};
export default function Banner() {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Use useScroll to track the scroll progress of the banner section itself.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const prevScrollYProgress = useRef(0);
  const bottleDownY = useMotionValue(0);
  const bottleCapUpY = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Only animate if scrolling down
      if (latest > prevScrollYProgress.current) {
        const newBottleDownY = latest * containerRef.current.offsetHeight * 0.8;
        const newBottleCapUpY =
          latest * containerRef.current.offsetHeight * 0.8;

        animate(bottleDownY, newBottleDownY, { y: { ease: "easeInOut" } });
        animate(bottleCapUpY, newBottleCapUpY, { y: { ease: "easeInOut" } });
      } else {
        return (prevScrollYProgress.current = 999); // Set to a high value to prevent upward animation
      }
      prevScrollYProgress.current = latest;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[18px] sm:py-[24px] lg:py-[36px]">
          {/* Banner Stack Container */}
          <div
            ref={containerRef}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[618px] mb-[12px] sm:mb-[18px] lg:mb-[24px]"
          >
            {/* Central Circle with Border */}
            <motion.div
              variants={ringVariance}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-white border-[4px] sm:border-[6px] lg:border-[8px] border-solid border-transparent bg-clip-padding"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #4dfbfb 0%, #788dff 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "border-box",
              }}
            >
              <motion.div className="w-full h-full rounded-full bg-white flex flex-col justify-end items-center pt-[60px] sm:pt-[90px] lg:pt-[122px] px-[24px] sm:px-[36px] lg:px-[48px] pb-[20px] sm:pb-[90px] lg:pb-[122px]">
                <motion.p
                  className="text-[18px] sm:text-[24px] lg:text-[30px] font-normal leading-[22px] sm:leading-[30px] lg:leading-[37px] text-center text-primary mb-[15px] sm:mb-[22px] lg:mb-[30px] mt-[50px] sm:mt-[136px] lg:mt-[182px]"
                  variants={textVariance}
                >
                  we believe in the power of hydration.
                  <br />
                  Our mission is simple yet vital
                </motion.p>
                <button
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                  style={{
                    background:
                      " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                    padding: "12px 36px",
                  }}
                >
                  Inquiry Now
                </button>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="relative top-[90px] sm:top-[78px] lg:top-[104px] left-1/2 transform -translate-x-1/2 text-[30px] sm:text-[72px] lg:text-[76px] font-semibold leading-[35px] sm:leading-[75px] lg:leading-[100px] tracking-[0.5px] sm:tracking-[0.75px] lg:tracking-[1px] text-center text-primary max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]"
              variants={textVariance}
            >
              The Ultimate Companion
              <br />
              for Hydration
            </motion.h2>

            {/* Left Bottle Stack */}
            <motion.div
              className="absolute bottom-0 left-0 w-[99px] h-[99px] sm:w-[148px] sm:h-[148px] lg:w-[198px] lg:h-[198px] rounded-full bg-[linear-gradient(180deg,#4dfbfb_0%,_#788dff_100%)] flex items-center justify-center"
              variants={textVariance}
            >
              <div className="relative w-[41px] h-[70px] sm:w-[61px] sm:h-[105px] lg:w-[82px] lg:h-[140px]">
                <img
                  src="/images/img_bottle_2_bottle.png"
                  alt="Bottle"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <img
                  src="/images/img_bottle_2_cap.png"
                  alt="Bottle Cap"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right Bottle Stack */}
            <motion.div
              className="absolute bottom-0 right-0 w-[99px] h-[99px] sm:w-[148px] sm:h-[148px] lg:w-[198px] lg:h-[198px] rounded-full bg-[linear-gradient(180deg,#4dfbfb_0%,_#788dff_100%)] flex items-center justify-center"
              variants={textVariance}
            >
              <div className="relative w-[50px] h-[87px] sm:w-[75px] sm:h-[130px] lg:w-[100px] lg:h-[174px]">
                <img
                  src="/images/img_bottle_img_3_cap.png"
                  alt="Bottle Cap"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <img
                  src="/images/img_bottle_img_3_bottle.png"
                  alt="Bottle"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
          {/* Floating Bottle Image (Downward) */}
          {containerHeight > 0 && (
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[340px] w-[118px] sm:h-[510px] sm:w-[158px] lg:h-[680px] lg:w-[208px] z-20"
              style={{ y: bottleDownY }}
              initial={{ y: containerHeight * -0.2 }}
              animate={{
                y: [containerHeight * -0.2, containerHeight * 0.15],
                transition: {
                  y: {
                    duration: 5,
                    delay: 0.5,
                    times: [0.1, 0.5],
                    ease: "easeInOut",
                  },
                },
              }}
              viewport={{ once: true }}
            >
              <img
                src="/images/img_bottle_down.png"
                alt="Floating bottle"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          )}

          {/* Floating Bottle Cap (Upward) */}
          {containerHeight > 0 && (
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[340px] w-[118px] sm:h-[510px] sm:w-[158px] lg:h-[680px] lg:w-[208px] z-20"
              style={{ y: bottleCapUpY }}
              initial={{ y: containerHeight * -0.2 }}
              animate={{
                y: [containerHeight * -0.2, containerHeight * -0.55],
                transition: {
                  y: {
                    duration: 5,
                    delay: 0.5,
                    times: [0.1, 0.5],
                    ease: "easeInOut",
                  },
                },
              }}
              viewport={{ once: true }}
            >
              <img
                src="/images/img_bottle_cap.png"
                alt="Floating bottle cap"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
