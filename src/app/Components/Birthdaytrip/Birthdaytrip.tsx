import Link from "next/link";
import React from "react";

const Birthdaytrip = () => {
  return (
    <section className="pb-20 pt-40 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Birthday Road Trip: Abu Dhabi to Dubai Car Lift Adventure
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Birthdays are special occasions meant to be celebrated memorably.
            For my friend Sarah’s birthday, we decided to embark on a thrilling
            road trip from Abu Dhabi to Dubai, but we wanted to make it even
            more exciting by opting for a car lift service instead of driving
            ourselves. After researching, we stumbled upon MB Carlift Services,
            a reputed company known for its reliable and safe carpooling
            adventures between the two bustling cities. Little did we know that
            this journey would be an unforgettable experience filled with
            adventure, laughter, and new friendships.
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
                title: "Comfortable & Spacious Vehicles",
                description:
                  "Our fleet includes clean, spacious, and well-maintained vehicles designed for maximum passenger comfort.",
                icon: "🚗",
              },
              {
                title: "Professional & Friendly Drivers",
                description:
                  "Our skilled drivers ensure a safe and enjoyable journey, offering excellent customer service and local insights.",
                icon: "👨‍✈️",
              },
              {
                title: "Scenic Route & Photo Stops",
                description:
                  "Enjoy breathtaking views of the desert landscape and make memorable stops for photos along the way.",
                icon: "📸",
              },
              {
                title: "Cultural Pit Stops",
                description:
                  "Experience the rich Emirati culture with unplanned stops at traditional restaurants and landmarks.",
                icon: "🍴",
              },
              {
                title: "Meet New People",
                description:
                  "Share the ride with fellow travelers and make new friends during your journey.",
                icon: "👥",
              },
              {
                title: "Affordable & Reliable",
                description:
                  "We offer competitive pricing and punctual service, ensuring a stress-free travel experience.",
                icon: "💲",
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
            Our Unforgettable Journey
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300">
              As Sarah’s birthday approached, we brainstormed ideas to make her
              day extraordinary. The notion of a road trip was well-received by
              all, but the idea of using a car lift service added an element of
              novelty. We chose MB Carlift Services due to its reputation for
              comfort, punctuality, and the assurance of having competent and
              responsible drivers.
            </p>
            <p className="text-gray-300">
              We eagerly assembled at our meeting point in Abu Dhabi on the
              morning of Sarah’s birthday. The anticipation was palpable as we
              met our driver, Ali, who greeted us warmly and assured us of a
              smooth journey. The MB Carlift vehicle was clean, spacious, and
              equipped with all the necessary safety features, making us feel at
              ease.
            </p>
            <p className="text-gray-300">
              The drive from Abu Dhabi to Dubai was a feast for the eyes. The
              highway offered breathtaking views of the desert landscape, with
              camel farms and quaint oases. As an avid photographer, Sarah
              couldn’t resist capturing these moments of natural beauty. Ali,
              our driver, kindly accommodated our frequent requests to pull over
              for photo opportunities.
            </p>
            <p className="text-gray-300">
              Music is essential to any road trip, and we curated a playlist of
              Sarah’s favourite songs. As the music filled the car, we sang
              along, sometimes off-key but always with laughter. The camaraderie
              and joy in the vehicle were infectious, making the journey even
              more enjoyable.
            </p>
            <p className="text-gray-300">
              Halfway through the trip, we made an unexpected pit stop at a
              traditional Emirati restaurant. The smell of freshly baked bread
              and aromatic spices welcomed us as we indulged in delicious local
              cuisine. The unplanned stop became a highlight of the trip,
              introducing us to the region’s rich culinary culture.
            </p>
            <p className="text-gray-300">
              One of the unique aspects of using a car lift service like MB
              Carlift was the opportunity to meet new people. Along the way, we
              picked up other passengers heading to Dubai. This allowed us to
              interact with different individuals, share stories, and make new
              friends. Our co-passengers’ diverse backgrounds and experiences
              enriched the journey, fostering connections beyond the road trip.
            </p>
            <p className="text-gray-300">
              As we approached Dubai, the iconic city skyline greeted us, and
              the excitement in the car reached its peak. The last leg of the
              trip was filled with anticipation for the celebration that awaited
              Sarah in Dubai. Ali, our driver, had been nothing short of
              amazing, and we were sad to say our goodbyes when he dropped us
              off at our destination.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]">
            Ready for Your Adventure?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Celebrate your special occasions with MB Carlift Services and create
            unforgettable memories on the road. Book your car lift today and
            experience the perfect blend of comfort, adventure, and reliability!
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

export default Birthdaytrip;