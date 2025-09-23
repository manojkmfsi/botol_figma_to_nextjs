"use client";

export default function HydrationEssentialsSection() {
  const products = [
    {
      id: 1,
      name: "Rainbow 600",
      image: "/images/img_1.png",
      bgColor: "bg-background-dark",
    },
    {
      id: 2,
      name: "Rio 650",
      image: "/images/img_4.png",
      bgColor: "bg-background-dark",
    },
    {
      id: 3,
      name: "Big Bull 1300",
      image: "/images/img_2_420x420.png",
      bgColor: "bg-background-dark",
    },
    {
      id: 4,
      name: "Rome 600",
      image: "/images/img_3_1.png",
      bgColor: "bg-background-dark",
    },
    {
      id: 5,
      name: "Rainbow 600",
      image: "/images/img_1.png",
      bgColor: "bg-background-dark",
    },
    {
      id: 6,
      name: "Sweetie 200",
      image: "/images/img_5.png",
      bgColor: "bg-background-dark",
    },
  ];

  return (
    <section className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[15px] sm:gap-[22px] lg:gap-[30px]">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="w-full sm:w-[50%]">
              <h2 className="text-[30px] sm:text-[45px] lg:text-[60px] font-semibold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-secondary mb-2">
                Hydration Essentials
              </h2>
              <p className="text-[14px] sm:text-[18px] lg:text-[24px] font-normal leading-[22px] sm:leading-[33px] lg:leading-[45px] text-secondary">
                Discover Our Range of Premium Water Bottles
              </p>
            </div>
            <button
              className="hover:opacity-80 transition-opacity cursor-pointer"
              style={{
                background:
                  " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                padding: "12px 36px",
              }}
            >
              View More
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex flex-col items-start gap-[5px] sm:gap-[7px] lg:gap-[10px]"
              >
                {/* Product Image Container */}
                <div
                  className={`w-full ${product.bgColor} rounded-lg sm:rounded-xl lg:rounded-[24px] overflow-hidden relative`}
                >
                  {product.hasOverlay ? (
                    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 lg:p-8"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-full h-[280px] sm:h-[350px] lg:h-[420px] flex items-center justify-center`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h3
                  className={`text-[20px] sm:text-[26px] lg:text-[32px] font-normal leading-[25px] sm:leading-[32px] lg:leading-[40px] text-secondary text-center`}
                >
                  {product.name}
                </h3>

                {/* Learn More Button */}
                <button
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                  style={{
                    background:
                      " linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%); border-radius: 100px",
                    padding: "12px 36px",
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
