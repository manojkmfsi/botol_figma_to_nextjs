"use client";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-6 gap-4 lg:gap-0">
          {/* Logo */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <img
              src="/images/img_vector.svg"
              alt="BOTOL Logo"
              className="w-[120px] h-[28px] sm:w-[140px] sm:h-[32px] md:w-[160px] md:h-[36px] lg:w-[174px] lg:h-[40px]"
            />

            {/* Hamburger Menu Icon (Mobile only) */}
            <button
              className="block lg:hidden p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${menuOpen ? "block" : "hidden"} lg:block w-full lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[40px] py-4 lg:py-0">
              <button
                role="menuitem"
                className="text-base sm:text-lg lg:text-xl font-normal leading-2xl text-secondary hover:text-blue-600 transition-colors duration-200"
              >
                Shop
              </button>
              <button
                role="menuitem"
                className="text-base sm:text-lg lg:text-xl font-normal leading-2xl text-primary hover:text-blue-600 transition-colors duration-200"
              >
                Contact us
              </button>
              <button
                role="menuitem"
                className="text-base sm:text-lg lg:text-xl font-normal leading-2xl text-primary hover:text-blue-600 transition-colors duration-200"
              >
                About
              </button>
              <button
                role="menuitem"
                className="text-base sm:text-lg lg:text-xl font-normal leading-2xl text-primary hover:text-blue-600 transition-colors duration-200"
              >
                Journal
              </button>
              <button
                role="menuitem"
                className="text-base sm:text-lg lg:text-xl font-normal leading-2xl text-primary hover:text-blue-600 transition-colors duration-200"
              >
                Custom
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <button
              style={{
                background:
                  " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                padding: "12px 36px",
              }}
            >
              Inquiry Nowh
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
