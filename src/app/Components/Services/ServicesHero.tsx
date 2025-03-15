import Link from "next/link";
import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#07aae7] to-[#0d6efd] pb-32 pt-40 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('/path/to/your/texture-or-pattern.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#07aae7] to-[#0d6efd] opacity-90"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Your Trusted Car Lift Partner Between Dubai and Abu Dhabi
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Experience seamless and reliable car lift services from Dubai to Abu
          Dhabi and Abu Dhabi to Dubai. We prioritize safety, comfort, and
          professionalism in every journey.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <button className="bg-white text-[#07aae7] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg">
            Book Your Ride Now
          </button>
          <Link href={"/about"}>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#07aae7] hover:scale-105 transform transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,160C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesHero;
