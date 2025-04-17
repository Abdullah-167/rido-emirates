import Image from "next/image";
import React from "react";


const SerAbuDhabiData = () => {
  return (
    <section className="pb-20 pt-40 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between gap-5 items-center mb-20 lg:flex-nowrap flex-wrap">
        <div className=" max-w-[700px]">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
              Abu Dhabi to Dubai Transport with Rido Emirate: Your Ultimate
              Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Traveling between Abu Dhabi and Dubai is a daily routine for many
              professionals, students, and travelers. At Rido Emirate, we
              provide safe, punctual, and cost-effective transport solutions
              tailored to your schedule.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/data/AbuDhabitoDubai.png" // Replace with your image URL
              alt="Car Lift between Dubai and Abu Dhabi"
              className="w-full h-auto"
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
        </div>

        {/* Why Travel Between Abu Dhabi and Dubai? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Why Travel Between Abu Dhabi and Dubai?
          </h2>
          <p className="text-gray-600 mb-6">
            Abu Dhabi and Dubai are the powerhouses of the UAE, each offering
            its own unique charm. Abu Dhabi is known for its cultural landmarks
            like the Sheikh Zayed Grand Mosque, while Dubai is famous for the
            Burj Khalifa and Palm Jumeirah. The distance between the two cities
            is approximately 140 kilometers, making it a popular route for
            commuters and tourists alike.
          </p>
        </div>

        {/* What is Rido Emirate? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            What is Rido Emirate?
          </h2>
          <p className="text-gray-600 mb-6">
            Rido Emirate is a premium car transportation service that
            specializes in shuttling passengers between Abu Dhabi and Dubai.
            Unlike traditional taxis or public transport, Rido Emirate offers a
            personalized and luxurious experience with professional drivers and
            well-maintained vehicles.
          </p>
        </div>

        {/* How Does Rido Emirate Work? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            How Does Rido Emirate Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Book Your Ride",
                description:
                  "Book through our website or app. Enter your pickup location, destination, and preferred time.",
                icon: "📱",
              },
              {
                title: "Choose Your Vehicle",
                description:
                  "Select from a range of vehicles, including sedans and SUVs, to suit your needs.",
                icon: "🚙",
              },
              {
                title: "Enjoy the Ride",
                description:
                  "A professional driver will pick you up and take you to your destination in comfort and style.",
                icon: "🚘",
              },
              {
                title: "Pay Hassle-Free",
                description:
                  "Payments are made electronically, so there’s no need to worry about cash or change.",
                icon: "💳",
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

        {/* Why Choose Rido Emirate? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Why Choose Rido Emirate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comfortable Vehicles",
                description:
                  "Our fleet includes spacious and clean vehicles designed for maximum passenger comfort.",
                icon: "🚗",
              },
              {
                title: "Professional Drivers",
                description:
                  "Our skilled drivers ensure a smooth ride, navigating the best routes to avoid traffic delays.",
                icon: "👨‍✈️",
              },
              {
                title: "Affordable Pricing",
                description:
                  "We offer competitive rates with flexible daily, weekly, and monthly pricing plans.",
                icon: "💲",
              },
              {
                title: "Punctual Service",
                description:
                  "Timeliness is our priority. We operate on a strict schedule to match your needs.",
                icon: "⏱️",
              },
              {
                title: "Door-to-Door Service",
                description:
                  "Enjoy the convenience of door-to-door transport, making your commute effortless.",
                icon: "🚪",
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

        {/* Who Can Benefit? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Who Can Benefit from Rido Emirate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Daily Commuters",
                description:
                  "Ideal for professionals working in Dubai who travel from Abu Dhabi daily.",
                icon: "👨‍💼",
              },
              {
                title: "Corporate Clients",
                description:
                  "Reliable transport solutions for businesses needing employee transportation.",
                icon: "🏢",
              },
              {
                title: "Students",
                description:
                  "Affordable transport for students commuting between Abu Dhabi and Dubai.",
                icon: "🎓",
              },
              {
                title: "Tourists",
                description:
                  "Comfortable and convenient intercity travel for tourists and visitors.",
                icon: "🌍",
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

        {/* Conclusion */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Conclusion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choosing Rido Emirate for your Abu Dhabi to Dubai transport is a
            smart decision for anyone seeking convenience, affordability, and
            reliability. Whether you’re commuting daily or planning occasional
            trips, our services offer unparalleled benefits that make your
            journey smooth and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SerAbuDhabiData;