import Link from "next/link";
import React from "react";

const Weddingtrip = () => {
  return (
    <section className="pb-20 pt-40 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            From Dubai to Abu Dhabi Car Lift for Weddings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your special day with sophistication and ease through our
            exclusive Dubai to Abu Dhabi car lift service tailored for weddings.
            Our dedicated team is committed to providing a seamless
            transportation experience for bridal parties, groomsmen, and
            esteemed guests.
          </p>
          <Link href={"/booking"}>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
              Book Your Ride Now
            </button>
          </Link>
        </div>

        {/* Features of Car Lift Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Features of Car Lift Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxurious Fleet",
                description:
                  "Choose from high-end sedans, SUVs, and luxury vehicles like Rolls-Royce, Bentley, and Tesla.",
                icon: "🚗",
              },
              {
                title: "Professional Chauffeurs",
                description:
                  "Our chauffeurs are skilled, courteous, and impeccably presented, ensuring a smooth and elegant journey.",
                icon: "👨‍✈️",
              },
              {
                title: "Customizable Packages",
                description:
                  "Tailor your experience with one-way, round-trip, or multi-day packages to suit your wedding needs.",
                icon: "🎁",
              },
              {
                title: "Safety & Comfort",
                description:
                  "Vehicles are equipped with advanced safety features, plush interiors, and climate control for a comfortable ride.",
                icon: "🛡️",
              },
              {
                title: "Eco-Friendly Options",
                description:
                  "Opt for electric or hybrid vehicles to reduce your carbon footprint while enjoying luxury travel.",
                icon: "🌿",
              },
              {
                title: "Seamless Logistics",
                description:
                  "We handle all the details, ensuring timely arrivals and departures for your wedding events.",
                icon: "⏱️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-[#07aae7] transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Why Choose Us for Your Wedding Transportation?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              Dubai and Abu Dhabi, two of the United Arab Emirates’ most iconic
              cities, are renowned for their luxury, grandeur, and captivating
              charm. In recent years, they have also become prime destinations
              for hosting extravagant and glamorous weddings. To make these
              events even more memorable, we offer luxurious car lift services
              for transporting guests between Dubai and Abu Dhabi.
            </p>
            <p className="text-gray-600">
              Our services ensure that your bridal party, groomsmen, and
              esteemed guests arrive at the wedding venue comfortably and
              elegantly. With a diverse fleet of vehicles, professional
              chauffeurs, and customizable packages, we provide a seamless and
              stylish transportation solution tailored to your wedding needs.
            </p>
            <p className="text-gray-600">
              Revel in the luxury of our spacious cars, thoughtfully designed to
              accommodate wedding attire and ensure a smooth and comfortable
              journey for everyone. We meticulously plan the logistics and
              timing, guaranteeing flawless wedding transportation. Leave the
              details to us, so you can fully immerse yourself in creating
              beautiful and lasting memories on your cherished day.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Make Your Wedding Day Unforgettable
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose our exclusive car lift services for a luxurious, stress-free
            wedding transportation experience. Contact us today to book your
            ride and ensure your special day is as seamless and elegant as
            you’ve always dreamed.
          </p>
          <button className="bg-gradient-to-r from-[#07aae7] to-[#0d6efd] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Weddingtrip;