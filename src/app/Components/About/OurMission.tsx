import React from "react";

const OurMission = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Driving excellence in car rental and lift services to meet your transportation needs with reliability and care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#07aae7] p-3 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600">
              To be the leading car rental company, offering unmatched convenience, exceptional service, and a diverse fleet of reliable vehicles to cater to the unique transportation needs of our customers.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#0d6efd] p-3 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600">
              Our mission is to deliver convenient, efficient, and affordable car lift and rental services. We strive to build lasting relationships with our clients by ensuring safe, secure, and stress-free transportation solutions that provide peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;