import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Premium Car Lift Services
        </h2>

        {/* First Row: Three Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Service 1: Night Parties */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Night Parties: Dubai to Abu Dhabi
            </h3>
            <p className="text-lg mb-4">
              Enjoy a seamless, comfortable, and stylish ride to Abu Dhabi for
              your night out, whether it’s a concert or a celebration.
            </p>
            <Link href={"/booking"}>
              <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
                Book Now
              </button>
            </Link>
          </div>

          {/* Service 2: Weddings */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Wedding Car Lifts: Dubai to Abu Dhabi
            </h3>
            <p className="text-lg mb-4">
              Make your wedding day unforgettable with seamless, luxurious
              transportation for you and your guests.
            </p>
            <Link href={"/booking"}>
              <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
                Book Now
              </button>
            </Link>
          </div>

          {/* Service 3: Casinos */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
             {` Rides to Dubai's Casinos`}
            </h3>
            <p className="text-lg mb-4">
              Arrive in style and luxury at the best casinos in Dubai, with a
              smooth, hassle-free ride.
            </p>
            <Link href={"/booking"}>
              <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Second Row: Two Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 4: Birthdays */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Birthday Celebrations: Dubai to Abu Dhabi
            </h3>
            <p className="text-lg mb-4">
              Celebrate your special day in style with luxurious transportation,
              ensuring a memorable experience.
            </p>
            <Link href={"/booking"}>
              <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
                Book Now
              </button>
            </Link>
          </div>

          {/* Service 5: Airport Transfers */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Airport Transfers: Dubai to Abu Dhabi
            </h3>
            <p className="text-lg mb-4">
              Enjoy a stress-free, timely airport transfer with our reliable
              service between Dubai and Abu Dhabi.
            </p>
            <Link href={"/booking"}>
              <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
