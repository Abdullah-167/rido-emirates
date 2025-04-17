import Link from "next/link";
import React from "react";

const AirportSec = () => {
  return (
    <section className="pb-20 pt-40 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Airport Car Lift: Dubai to Abu Dhabi Route – Your Stress-Free Travel
            Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless and reliable transportation with Rido Emirate,
            your trusted partner for airport car lift services between Dubai and
            Abu Dhabi. Whether you’re catching a flight or returning home, our
            premium vehicles and professional drivers ensure a smooth,
            stress-free journey.
          </p>
          <Link href={"/booking"}>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
              Book Your Ride Now
            </button>
          </Link>
        </div>

        {/* The Significance of Dubai to Abu Dhabi Route */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            The Significance of Dubai to Abu Dhabi Route
          </h2>
          <p className="text-gray-600 mb-6">
            The Dubai to Abu Dhabi route is a vital transportation link in the
            UAE, connecting the nation’s two key economic and cultural hubs.
            Both cities are renowned for their iconic landmarks, booming
            business sectors, and diverse cultural attractions, making them top
            destinations for millions of visitors each year.
          </p>
          <p className="text-gray-600">
            Whether for business, leisure, or social visits, traveling between
            Dubai and Abu Dhabi is a daily necessity for both residents and
            tourists. The route serves as an essential connection, facilitating
            the movement of people and resources across these vibrant cities.
          </p>
        </div>

        {/* Why Hire Us for Dubai to Abu Dhabi Airport Car Lift? */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Why Hire Us for Dubai to Abu Dhabi Airport Car Lift?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exceptional Punctuality",
                description:
                  "We guarantee timely pickups and drop-offs, using real-time traffic updates to choose the most efficient routes.",
                icon: "⏱️",
              },
              {
                title: "Comfortable and Safe Vehicles",
                description:
                  "Our fleet includes modern vehicles with advanced safety features, ensuring a luxurious and secure journey.",
                icon: "🚗",
              },
              {
                title: "Professional and Courteous Drivers",
                description:
                  "Our drivers are trained in driving skills and customer service, offering clear communication and a pleasant experience.",
                icon: "👨‍✈️",
              },
              {
                title: "Cost-Effective Travel Solution",
                description:
                  "We provide competitive pricing without compromising on quality, making airport travel affordable and reliable.",
                icon: "💲",
              },
              {
                title: "Online Booking Convenience",
                description:
                  "Our user-friendly platform allows you to book your ride in advance with secure payment options.",
                icon: "📱",
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

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07aae7] to-[#0d6efd]">
            Ready for a Stress-Free Journey?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose Rido Emirate for reliable, comfortable, and affordable
            airport car lift services between Dubai and Abu Dhabi. Book your
            ride today and experience the difference!
          </p>
          <button className="bg-gradient-to-r from-[#07aae7] to-[#0d6efd] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirportSec;  