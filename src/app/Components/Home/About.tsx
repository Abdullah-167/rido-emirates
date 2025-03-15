import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex gap-5 flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="space-y-6 mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-[#07aae7]">About Rido Emirates</h2>
          <p className="text-xl">
           {` At Rido Emirates, we take pride in being your trusted partner for commuting between Dubai and Abu Dhabi. We are committed to providing safe, affordable, and comfortable transportation services that meet the diverse needs of our customers. Whether you're traveling for business, leisure, or daily commuting, we ensure a seamless, reliable, and pleasant journey every time.`}
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#07aae7]">Our Mission and Vision</h3>
            <p className="text-lg">
              Our mission at Rido Emirates is to provide exceptional car lift services that offer both comfort and convenience while maintaining high standards of safety, affordability, and sustainability. We are driven by a vision to become the leading car lift service provider in the UAE, connecting Dubai and Abu Dhabi with reliable and affordable transportation solutions.
            </p>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-[#07aae7]">Mission:</h4>
              <p className="text-lg">
              {`  We aim to offer premium car lift services while prioritizing our customers' needs, ensuring punctuality and comfort on every ride.`}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-[#07aae7]">Vision:</h4>
              <p className="text-lg">
                To revolutionize daily commuting by offering eco-friendly, flexible, and cost-effective travel solutions for every passenger.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/data/Post3.jpg" 
            width={500}// Replace with the actual image URL
            height={500}// Replace with the actual image URL
            alt="Rido Emirates"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
