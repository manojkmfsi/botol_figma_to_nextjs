"use client";
import { motion } from "framer-motion";

export default function ProductShowcaseSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row w-full min-h-[400px] sm:min-h-[600px] lg:min-h-[860px]">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/img_22_1.png"
            alt="Premium Water Bottle"
            className="w-full h-[300px] sm:h-[400px] lg:h-[860px] object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 z-[-1] bg-neutral-900 relative px-[30px] sm:px-[45px] lg:px-[60px]">
          <div className="flex flex-col justify-center items-center h-[300px] sm:h-[400px] lg:h-[860px] gap-[37px] sm:gap-[55px] lg:gap-[74px]">
            {/* Vacuum Bottles */}
            <div className="flex items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full max-w-[400px]">
              <div className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] lg:w-[70px] lg:h-[70px] rounded-[17px] sm:rounded-[26px] lg:rounded-[34px] bg-white flex items-center justify-center p-[5px] sm:p-[7px] lg:p-[10px]">
                <img
                  src="/images/img_water_bottle_1.png"
                  alt="Vacuum Bottle"
                  className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] lg:w-[48px] lg:h-[48px] object-contain"
                />
              </div>
              <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[25px] sm:leading-[37px] lg:leading-[50px] text-white">
                Vacuum Bottles
              </h3>
            </div>

            {/* Fridge Bottles & Jugs */}
            <div className="flex items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full max-w-[400px]">
              <div className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] lg:w-[70px] lg:h-[70px] rounded-[17px] sm:rounded-[26px] lg:rounded-[34px] bg-white flex items-center justify-center p-[1px] sm:p-[1.5px] lg:p-[2px]">
                <img
                  src="/images/img_2.svg"
                  alt="Fridge Bottle"
                  className="w-[33px] h-[33px] sm:w-[49px] sm:h-[49px] lg:w-[66px] lg:h-[66px] object-contain"
                />
              </div>
              <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[25px] sm:leading-[37px] lg:leading-[50px] text-white">
                Fridge Bottles & Jugs
              </h3>
            </div>

            {/* Borosilicate Bottles */}
            <div className="flex items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full max-w-[400px]">
              <div className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] lg:w-[70px] lg:h-[70px] rounded-[17px] sm:rounded-[26px] lg:rounded-[34px] bg-white flex items-center justify-center p-[4px] sm:p-[6px] lg:p-[8px]">
                <img
                  src="/images/img_bottle_4.png"
                  alt="Borosilicate Bottle"
                  className="w-[27px] h-[27px] sm:w-[40px] sm:h-[40px] lg:w-[54px] lg:h-[54px] object-contain"
                />
              </div>
              <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[25px] sm:leading-[37px] lg:leading-[50px] text-white">
                Borosilicate Bottles
              </h3>
            </div>

            {/* Kettles */}
            <div className="flex items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full max-w-[400px]">
              <div className="w-[35px] h-[35px] sm:w-[52px] sm:h-[52px] lg:w-[70px] lg:h-[70px] rounded-[17px] sm:rounded-[26px] lg:rounded-[34px] bg-white flex items-center justify-center p-[5px] sm:p-[7px] lg:p-[10px]">
                <img
                  src="/images/img_electric_kettle.png"
                  alt="Electric Kettle"
                  className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] lg:w-[48px] lg:h-[48px] object-contain"
                />
              </div>
              <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[25px] sm:leading-[37px] lg:leading-[50px] text-white">
                Kettles
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
