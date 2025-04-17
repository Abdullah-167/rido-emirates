"use client";

import React from "react";

// Add type definitions for Facebook Pixel events
type FacebookPixelEventData = {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  // Add other possible Facebook Pixel parameters as needed
};

const Hero = () => {
  const trackEvent = async (event: string, data?: FacebookPixelEventData) => {
    if (typeof window !== "undefined") {
      const ReactPixel = (await import("react-facebook-pixel")).default;
      ReactPixel.track(event, data);
    }
  };

  const handleCallClick = () => {
    trackEvent("Contact");
  };

  const handleWhatsAppClick = () => {
    trackEvent("Lead", {
      content_name: "WhatsApp Inquiry",
    });
  };

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
          onClick={handleCallClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg cursor-pointer font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Call Us Now
        </a>

        {/* WhatsApp Now Button */}
        <a
          href="https://wa.me/971507106162"
          onClick={handleWhatsAppClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg cursor-pointer font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Whatsapp Now
        </a>
      </div>
    </header>
  );
};

export default Hero;