'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {

  }

  return (
    <section className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      <div className=" px-[30px] sm:px-[45px] lg:px-[60px] py-[23px] sm:py-[34px] lg:py-[46px] w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 rounded-md sm:rounded-lg lg:rounded-[18px] bg-[linear-gradient(90deg,#201f1fcc_0%,_#201f1f_100%)]">

          {/* Left Image Section */}
          <div className="w-full lg:w-[40%] mt-[21px] sm:mt-[31px] lg:mt-[42px] lg:self-end">
            <img
              src="/images/img_big_bull_1300_blue_btl_2047.png"
              alt="Big Bull 1300 Blue Bottle"
              className="w-full max-w-[267px] sm:max-w-[400px] lg:max-w-[534px] h-auto object-contain mx-auto rounded-md sm:rounded-lg lg:rounded-[18px]"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-[48%] flex flex-col justify-start items-start gap-[13px] sm:gap-[19px] lg:gap-[26px]">

            {/* Header */}
            <h2
              className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold leading-[25px] sm:leading-[37px] lg:leading-[50px] tracking-[0.5px] sm:tracking-[0.75px] lg:tracking-[1px] text-white"
              style={{ fontFamily: 'Familjen Grotesk' }}
            >
              Get in touch with us
            </h2>

            {/* Subtitle */}
            <p
              className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[15px] sm:leading-[18px] lg:leading-[21px] text-white w-full sm:w-[70%] lg:w-[56%] mt-[6px] sm:mt-[9px] lg:mt-[12px]"
              style={{ fontFamily: 'Familjen Grotesk' }}
            >
              Hi, I&apos;m Amanda. Need help? Use the form below or email me at hello@xyz.com
            </p>

            {/* Form */}
            <div className="w-full items-start sm:w-[90%] lg:w-[82%] flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] mt-[13px] sm:mt-[19px] lg:mt-[26px]">

              {/* Name Field */}
              <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] w-full">
                <label
                  className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[15px] lg:leading-[18px] text-white"
                  style={{ fontFamily: 'Familjen Grotesk' }}
                >
                  Name
                </label>
                <input
                  placeholder="Rachel Joe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-[13px] sm:px-[19px] lg:px-[26px] py-[8px] sm:py-[12px] lg:py-[16px] text-white  focus:outline-none focus:border-brand-cyan-start  border border-brand-gray rounded-lg"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] w-full">
                <label
                  className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[15px] lg:leading-[18px] text-white"
                  style={{ fontFamily: 'Familjen Grotesk' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Rachel@domain.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-[13px] sm:px-[19px] lg:px-[26px] py-[8px] sm:py-[12px] lg:py-[16px] text-white  focus:outline-none focus:border-brand-cyan-start  border border-brand-gray rounded-lg"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] w-full">
                <label
                  className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[15px] lg:leading-[18px] text-white"
                  style={{ fontFamily: 'Familjen Grotesk' }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your query here....."
                  className="w-full px-[13px] sm:px-[19px] lg:px-[26px] py-[8px] sm:py-[12px] lg:py-[16px] text-white  focus:outline-none focus:border-brand-cyan-start  border border-brand-gray rounded-lg"
                  rows="4"
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  defaultValue={formData.message}
                ></textarea>
               
              </div>

              {/* Submit Button */}
              <button
                className="px-[17px] sm:px-[25px] lg:px-[34px] py-[6px] sm:py-[9px] lg:py-[12px] w-full sm:w-auto max-w-[200px] sm:max-w-none"
                style={{
                  background:
                    " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                  padding: "12px 36px",
                }}
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}