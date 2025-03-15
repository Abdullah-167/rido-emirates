import React from "react";

const AboutContact = () => {
  return (
    <section className="py-20 bg-[#07aae7]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Contact Us
        </h2>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
          If you are looking for a reliable and efficient car lift and rent a car service from Dubai to Abu Dhabi or vice versa, contact us today. Our customer support team is available 24/7 to assist with any queries or concerns you may have.
        </p>
        <a
          href="tel:+971123456789" // Replace with your actual phone number
          className="inline-flex items-center justify-center bg-white text-[#07aae7] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
      </div>
    </section>
  );
};

export default AboutContact;