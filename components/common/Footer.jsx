"use client";

const Footer = () => {
  return (
    <footer className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      {/* Main Footer Content */}
      <section className="w-full bg-secondary-background">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px]">
          <div className="py-[31px] sm:py-[46px] lg:py-[62px]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
              {/* Company Info Section */}
              <div className="w-full lg:w-[36%] mb-4 lg:mb-2">
                <div className="flex flex-col gap-5 lg:gap-[20px] w-full lg:w-[70%]">
                  {/* Logo */}
                  <img
                    src="/images/img_vector.svg"
                    alt="BOTOL Logo"
                    className="w-[120px] h-[28px] sm:w-[140px] sm:h-[32px] md:w-[160px] md:h-[36px] lg:w-[174px] lg:h-[40px] ml-2 lg:ml-[8px]"
                  />

                  {/* Description and Social Icons */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-normal leading-3xl text-primary mb-4 sm:mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 sm:gap-6 items-center">
                      <img
                        src="/images/img_facebook.png"
                        alt="Facebook"
                        className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] hover:opacity-80 transition-opacity cursor-pointer"
                      />
                      <img
                        src="/images/img_instagram.png"
                        alt="Instagram"
                        className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] hover:opacity-80 transition-opacity cursor-pointer"
                      />
                      <img
                        src="/images/img_twitter.png"
                        alt="Twitter"
                        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="w-full sm:w-auto lg:w-[20%]">
                <div className="flex flex-col gap-3 lg:gap-[12px]">
                  <h3 className="text-lg font-semibold leading-xl text-primary">
                    Quick Links
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors cursor-pointer">
                      Shop
                    </p>
                    <p className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors cursor-pointer">
                      About us
                    </p>
                    <p className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors cursor-pointer">
                      Journal
                    </p>
                    <p className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors cursor-pointer">
                      Custom
                    </p>
                    <p className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors cursor-pointer">
                      Contact us
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Care Section */}
              <div className="w-full sm:w-auto lg:w-[12%]">
                <div className="flex flex-col gap-3 lg:gap-[12px]">
                  <h3 className="text-lg font-semibold leading-xl text-primary">
                    Customer Care
                  </h3>
                  <ul className="flex flex-col gap-4 lg:gap-[16px]">
                    <li>
                      <a
                        href="#"
                        className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors"
                      >
                        FAQ&apos;s
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors"
                      >
                        Returns
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors"
                      >
                        Ordering
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors"
                      >
                        Shipping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base font-normal leading-7xl text-primary hover:text-blue-600 transition-colors"
                      >
                        Personalization Policies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="w-full sm:w-auto lg:w-[16%] lg:mt-[14px] lg:mr-[134px]">
                <div className="flex flex-col gap-5 lg:gap-[20px]">
                  <ul className="flex flex-col gap-4 lg:gap-[16px]">
                    <li>
                      <h3 className="text-lg font-semibold leading-xl text-primary">
                        Contact us
                      </h3>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex gap-2 lg:gap-[8px] items-start hover:text-blue-600 transition-colors"
                      >
                        <img
                          src="/images/img_maps_and_flags.png"
                          alt="Location"
                          className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-1"
                        />
                        <span className="text-base font-normal leading-base text-primary">
                          857 4074 Vicente Pass,
                          <br />
                          Deckowview
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div className="flex gap-4 lg:gap-[30px]">
                    <div className="flex flex-col gap-5 lg:gap-[20px] items-center">
                      <img
                        src="/images/img_email.png"
                        alt="Email"
                        className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px]"
                      />
                      <img
                        src="/images/img_phone_call.png"
                        alt="Phone"
                        className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[22px] items-start">
                      <a
                        href="mailto:Jonedoe@xyz.com"
                        className="text-base font-normal leading-base text-primary hover:text-blue-600 transition-colors"
                      >
                        Jonedoe@xyz.com
                      </a>
                      <a
                        href="tel:+8611222299999"
                        className="text-base font-normal leading-base text-primary hover:text-blue-600 transition-colors"
                      >
                        +86 11 2222 9999
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="w-full bg-background-light">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full py-[7px] sm:py-[10px] lg:py-[14px] px-4 sm:px-6 lg:px-[34px] text-center bg-background-light text-primary border-0 hover:bg-gray-200 transition-colors">
            Copyright © 2023 BOTOL. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
