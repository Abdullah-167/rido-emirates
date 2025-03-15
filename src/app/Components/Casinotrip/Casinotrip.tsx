import Link from "next/link";
import React from "react";

const Casinotrip = () => {
  return (
    <section className="pb-20 pt-40 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Winning Wheels: VIP Casino Transport from Abu Dhabi to Dubai
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are dedicated to providing a luxurious and exclusive travel
            experience tailored to the needs of discerning clients seeking the
            best. Whether you are a high-rolling casino enthusiast or a
            leisure-seeking traveller, our top-notch fleet and professional
            chauffeurs ensure a seamless journey to Dubai’s most glamorous
            casinos.
          </p>
          <Link href={"/booking"}>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
              Book Your Ride Now
            </button>
          </Link>
        </div>

        {/* Features of Car Lift Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Features of Car Lift Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxurious Fleet",
                description:
                  "Choose from a range of Mercedes-Benz vehicles, including the sleek S-Class and spacious V-Class, equipped with the latest technology.",
                icon: "🚗",
              },
              {
                title: "Professional Chauffeurs",
                description:
                  "Our chauffeurs are highly trained, discreet, and committed to providing a VIP experience from start to finish.",
                icon: "👨‍✈️",
              },
              {
                title: "Privacy & Confidentiality",
                description:
                  "Your journey with us is completely confidential, ensuring your comfort and peace of mind.",
                icon: "🔒",
              },
              {
                title: "Punctuality Guaranteed",
                description:
                  "We prioritize timely pickups and drop-offs, ensuring you never miss a moment of your casino adventure.",
                icon: "⏱️",
              },
              {
                title: "Personalized Service",
                description:
                  "Tailor your journey with custom amenities, entertainment options, and vehicle preferences.",
                icon: "🎁",
              },
              {
                title: "24/7 Availability",
                description:
                  "Our services are available round the clock to accommodate your last-minute travel needs.",
                icon: "🌙",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-[#ff9a9e]">{item.icon}</div>
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
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Why Choose Winning Wheels?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300">
              At Winning Wheels, we understand that luxury is not just a word
              but an experience that starts when you enter our vehicles. Our
              fleet comprises a range of Mercedes-Benz cars equipped with the
              latest technology and amenities, ensuring the highest standards of
              comfort and safety. Whether you choose the sleek Mercedes S-Class
              or the spacious Mercedes V-Class, our vehicles exude elegance and
              sophistication, making every ride memorable.
            </p>
            <p className="text-gray-300">
              Our chauffeurs are the heart of our service, and we take pride in
              the professionalism and expertise they bring to every trip. Each
              chauffeur undergoes rigorous training and holds the necessary
              certifications to ensure they provide a safe and enjoyable
              journey. With an in-depth knowledge of the roads between Abu Dhabi
              and Dubai, our drivers are adept at navigating traffic conditions,
              ensuring you reach your destination on time and without any
              hassle.
            </p>
            <p className="text-gray-300">
              We understand privacy and confidentiality are paramount when
              catering to our esteemed VIP clients. At Winning Wheels, we
              prioritise your comfort and peace of mind. Rest assured that your
              journey with us will be completely confidential, and any personal
              information you share will be handled with the utmost care and
              discretion.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Ready for a Luxurious Casino Experience?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Book your VIP casino transport with Winning Wheels today and
            experience unparalleled luxury, comfort, and convenience. Let us
            take you to the world of excitement and entertainment in Dubai’s
            finest casinos.
          </p>
          <Link href={"/booking"}>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
              Book Your Ride Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Casinotrip;
