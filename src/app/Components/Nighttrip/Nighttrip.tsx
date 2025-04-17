import Link from "next/link";
import React from "react";

const Nighttrip = () => {
  return (
    <section className="pb-20 pt-40 bg-[#002a6d]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
            Car Lift Services from Dubai to Abu Dhabi for Night Parties
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience an unforgettable night out in Abu Dhabi with our
            exclusive car lift service from Dubai. Whether attending a concert,
            celebrating a special occasion, or exploring the vibrant nightlife,
            our Car Lift Dubai to Abu Dhabi for night parties is the ultimate
            solution.
          </p>
          <Link href={"/booking"}>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
              Book Your Ride Now
            </button>
          </Link>
        </div>

        {/* Features of Car Lift Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
            Features of Car Lift Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Safe & Reliable",
                description:
                  "Our professional drivers ensure a secure journey, so you can focus on enjoying your night.",
                icon: "🛡️",
              },
              {
                title: "Door-to-Door Service",
                description:
                  "We pick you up from your location in Dubai and drop you off at your destination in Abu Dhabi.",
                icon: "🚪",
              },
              {
                title: "Flexible Timings",
                description:
                  "Whether it’s a late-night party or an early-morning return, we cater to your schedule.",
                icon: "⏰",
              },
              {
                title: "Group-Friendly",
                description:
                  "Spacious vehicles accommodate groups, making it perfect for friends or colleagues.",
                icon: "👥",
              },
              {
                title: "Affordable & Convenient",
                description:
                  "Eliminate parking fees and driving stress with our cost-effective services.",
                icon: "💲",
              },
              {
                title: "Exclusive Experience",
                description:
                  "Arrive in style with our chauffeur-driven vehicles, setting the tone for an extraordinary night.",
                icon: "🌟",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#2B7FFF] backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border  transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-[#ff7e5f]">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent ">
            Why Choose Us for Night Parties?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300">
              Abu Dhabi’s vibrant nightlife has long been a magnet for
              partygoers from across the UAE, mainly from neighbouring Dubai.
              With the two cities within a reasonable distance, many people
              prefer to drive to Abu Dhabi for a night of revelry. However, this
              presents several challenges, particularly for those who want to
              enjoy their night to the fullest without worrying about driving
              back home afterwards.
            </p>
            <p className="text-gray-300">
              Car lift services from Dubai to Abu Dhabi for night parties offer
              an elegant solution to these challenges. They provide a
              comfortable, safe, and convenient means of transportation,
              allowing partygoers to focus solely on enjoying their night
              without the burden of driving responsibilities.
            </p>
            <p className="text-gray-300">
              With no driving responsibilities, passengers can use the travel
              time to socialise, listen to music, or even continue the party
              atmosphere within the vehicle. It adds an extra layer of
              excitement to the night.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
            Ready for an Unforgettable Night Out?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Book your car lift service today and experience the perfect blend of
            convenience, comfort, and safety. Let us take care of the
            transportation while you focus on making memories at Abu Dhabi’s
            vibrant nightlife.
          </p>
          <Link href={"/booking"}>
          <button className="bg-[#2B7FFF] cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nighttrip;