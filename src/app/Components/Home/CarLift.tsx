import Image from "next/image";
import React from "react";

const CarLift = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <Image
              src="/data/DubaitoAbuDhabi.png" // Replace with your image URL
              alt="Car Lift between Dubai and Abu Dhabi"
              className="w-full h-auto rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div>
              <Image
                src="/data/Arrow.png" // Replace with your image URL
                alt="Car Lift between Dubai and Abu Dhabi"
                className="absolute top-[42%] left-[35%] max-h-[180px] max-w-[180px] w-full object-cover animate-bounce rotate-[20deg] "
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 ">
              Dubai to Abu Dhabi Car Lift,Effortless Travel{" "}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#07aae7] text-[#07aae7] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Extensive Vehicle Selection
                </h3>
                <p className="text-lg">
                  We provide a wide range of well-maintained vehicles to cater
                  to all your needs, ensuring a comfortable journey no matter
                  the occasion.
                </p>
              </div>

              <div className="border border-[#07aae7] text-[#07aae7] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Transparent and Competitive Pricing
                </h3>
                <p className="text-lg">
                  Our pricing is clear and competitive, ensuring that you
                  receive exceptional value for the premium service you deserve.
                </p>
              </div>

              <div className="border border-[#07aae7] text-[#07aae7] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Faster Booking</h3>
                <p className="text-lg">
                  Experience a streamlined booking process that allows you to
                  reserve your ride quickly and easily, with just a few clicks.
                </p>
              </div>

              <div className="border border-[#07aae7] text-[#07aae7] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  90% Customer Satisfaction
                </h3>
                <p className="text-lg">
                  Our customers consistently rate us highly, with 90%
                  satisfaction, demonstrating our commitment to delivering
                  excellent service every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLift;
