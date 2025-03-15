import React from "react";

const Hero = () => {
  return (
    <header className="mb-40 relative left-1/2 transform -translate-x-1/2 top-28 rounded-3xl w-full h-screen overflow-hidden max-h-[500px] max-w-[1300px]">
      {/* Background Video */}
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/data/ridoemairatehero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Overlay Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Centered Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex w-full gap-3 justify-center">
        {/* Call Us Now Button */}
        <a
          href="tel:+971507106162"
          className="px-6 py-3 bg-blue-600 text-white text-lg cursor-pointer font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Call Us Now
        </a>

        {/* WhatsApp Now Button */}
        <a
          href="https://wa.me/971507106162"
          className="px-6 py-3 bg-blue-600 text-white text-lg cursor-pointer font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Whatsapp Now
        </a>
      </div>
    </header>
  );
};

export default Hero;
