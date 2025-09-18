"use client";

export default function AboutUsSection() {
  const features = [
    {
      number: "1",
      title: "Wide Mouth Bottles\nTo Clean Easily.",
      width: "w-full sm:w-[68%]",
    },
    {
      number: "2",
      title: "Insulated Bottles For\nHot And Cold Technology",
      width: "w-full sm:w-[82%]",
    },
    {
      number: "3",
      title: "Variation In Sizes,\nStyles, And Material",
      width: "w-full sm:w-[68%]",
    },
    {
      number: "4",
      title: "Made In India To Serve\nAuthenticity",
      width: "w-full sm:w-[76%]",
    },
  ];

  return (
    <section
      className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img_132643845195021_1.png')" }}
    >
      <div className="w-full bg-opacity-40">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-[56px]">
          <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
              {/* Left Content Section */}
              <div className="w-full lg:flex-1 flex flex-col gap-[15px] sm:gap-[22px] lg:gap-[30px]">
                {/* Header */}
                <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[10px]">
                  <h2
                    className="text-[30px] sm:text-[45px] lg:text-[60px] font-semibold leading-[37px] sm:leading-[56px] lg:leading-[75px] text-white"
                    style={{ fontFamily: "Familjen Grotesk" }}
                  >
                    About us
                  </h2>
                  <p
                    className="text-[14px] sm:text-[18px] lg:text-[24px] font-normal leading-[18px] sm:leading-[22px] lg:leading-[30px] text-white"
                    style={{ fontFamily: "Familjen Grotesk" }}
                  >
                    HEALTH, HAPPINESS, & SUSTAINABILITY
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[12px] sm:text-[16px] lg:text-[20px] font-normal leading-[19px] sm:leading-[24px] lg:leading-[32px] text-white w-full lg:w-[86%]"
                  style={{ fontFamily: "Familjen Grotesk" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                {/* Learn More Button */}
                <button
                  style={{
                    background:
                      " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                    padding: "12px 36px",
                  }}
                >
                  Learn More
                </button>

                {/* <Button
                  text="Learn More"
                  className="px-[17px] sm:px-[25px] lg:px-[34px] py-[6px] sm:py-[9px] lg:py-[12px] w-full sm:w-auto max-w-[200px] sm:max-w-none"
                  fill_background_color=""
                  layout_width=""
                  padding=""
                  position=""
                  margin=""
                  variant=""
                  size=""
                  onClick={() => {}}
                /> */}
              </div>

              {/* Right Features Section */}
              <div className="w-full lg:w-[42%] lg:self-center flex flex-col gap-[15px] sm:gap-[22px] lg:gap-[30px]">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.width} flex gap-[15px] sm:gap-[22px] lg:gap-[30px] items-center p-[12px] sm:p-[18px] lg:p-[24px] rounded-lg sm:rounded-xl lg:rounded-[24px] border border-solid border-border-white bg-[linear-gradient(180deg,#ffffff4c_0%,#00000019_50%,#ffffff33_100%)] shadow-[0px_2px_10px_#888888ff] sm:shadow-[0px_3px_15px_#888888ff] lg:shadow-[0px_4px_20px_#888888ff]`}
                  >
                    <span
                      className="text-[30px] sm:text-[45px] lg:text-[60px] font-semibold leading-[37px] sm:leading-[56px] lg:leading-[75px] text-white self-end"
                      style={{ fontFamily: "Familjen Grotesk" }}
                    >
                      {feature.number}
                    </span>
                    <h3
                      className="text-[16px] sm:text-[24px] lg:text-[32px] font-semibold leading-[20px] sm:leading-[30px] lg:leading-[40px] text-white"
                      style={{ fontFamily: "Familjen Grotesk" }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
