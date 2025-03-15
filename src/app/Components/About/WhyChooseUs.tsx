import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the reasons why Rido Emirates is the preferred choice for
            car lift and rental services in the UAE.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experienced Drivers Card */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experienced and Trained Drivers
            </h3>
            <p className="text-gray-600">
              Our drivers are highly experienced and trained to handle all types
              of vehicles, ensuring a safe and secure journey.
            </p>
          </div>

          {/* Modern Vehicles Card */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Modern and Well-Maintained Vehicles
            </h3>
            <p className="text-gray-600">
              Our fleet consists of modern, well-maintained vehicles, ensuring a
              smooth and efficient journey.
            </p>
          </div>

          {/* Competitive Pricing Card */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              We offer competitive pricing for our services, ensuring you get
              the best value for your money.
            </p>
          </div>

          {/* Customer Support Card */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to assist
              with any queries or concerns.
            </p>
          </div>

          {/* GPS Tracking Card */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              GPS Tracking
            </h3>
            <p className="text-gray-600">
             {` We use advanced GPS tracking to monitor your vehicle's location,`}
              ensuring transparency and security.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#07aae7] transition-all duration-300">
            <div className="bg-[#07aae7] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              On-Time Delivery
            </h3>
            <p className="text-gray-600">
              We prioritize punctuality and ensure your vehicle is delivered on
              time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
