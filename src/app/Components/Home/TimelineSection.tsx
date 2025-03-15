import React from "react";

const TimelineSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Dubai to Abu Dhabi Car Lift and Abu Dhabi to Dubai Car Lift Solutions
        </h2>

        <p className="text-lg text-center mb-8">
          At MB Car Lift, we offer customized car lift services designed to
          accommodate the diverse needs of every traveler. Whether you require a
          one-way trip from Dubai to Abu Dhabi, or a round-trip from Abu Dhabi
          to Dubai, we have a tailored solution to meet your preferences. With a
          focus on flexibility, comfort, and convenience, we ensure a smooth and
          seamless journey between these two major cities. We understand that
          each traveler has unique requirements, which is why we offer flexible
          options that can be personalized for your needs.
        </p>

        <div className="relative">
          {/* Timeline line */}

          {/* Timeline Content */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-5">
            {/* One-Way Trip Left */}
            <div className="flex flex-col items-center md:w-1/3 md:order-1">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">
                  One-Way Trips: Dubai to Abu Dhabi or Abu Dhabi to Dubai
                </h3>
                <p className="text-lg">
                  <strong>Ideal for One-Time Commuters:</strong> Our one-way car
                  lift service is the perfect choice for business travelers,
                  tourists, or anyone needing a quick, efficient, and
                  comfortable ride between Dubai and Abu Dhabi, or vice versa.
                </p>
              </div>
            </div>

            {/* Two-Way Trip Right */}
            <div className="flex flex-col items-center md:w-1/3 md:order-2">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Flexibility & Convenience
                </h3>
                <p className="text-lg">
                  Enjoy the convenience of a one-way trip with the added
                  flexibility to travel on your schedule, without the worry of
                  return trip timing.
                </p>
              </div>
            </div>

            {/* Easy Booking Left */}
            <div className="flex flex-col items-center md:w-1/3 md:order-3">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">Simple Booking</h3>
                <p className="text-lg">
                  Choose your pickup location, time, and vehicle, and let us
                  take care of the rest with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Two-Way Trip Left */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between space-y-8 md:space-y-0 gap-5 mt-12">
            {/* Round-Trip Flexibility Left */}
            <div className="flex flex-col items-center md:w-1/3 md:order-1">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Two-Way Trips: Dubai to Abu Dhabi & Abu Dhabi to Dubai
                </h3>
                <p className="text-lg">
                  <strong>Round-Trip Flexibility:</strong> Our two-way car lift
                  service is designed for commuters and tourists who require
                  frequent travel between Dubai and Abu Dhabi, offering the
                  flexibility to schedule multiple trips throughout the day or
                  week.
                </p>
              </div>
            </div>

            {/* Return Ride Included Right */}
            <div className="flex flex-col items-center md:w-1/3 md:order-2">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Guaranteed Return Ride
                </h3>
                <p className="text-lg">
                  Our two-way service ensures you have a guaranteed, reliable
                  return trip once you’ve reached your destination.
                </p>
              </div>
            </div>

            {/* Seamless Scheduling Left */}
            <div className="flex flex-col items-center md:w-1/3 md:order-3">
              <div className="bg-[#07aae7] text-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Streamlined Scheduling
                </h3>
                <p className="text-lg">
                  We coordinate your trips meticulously to ensure timely
                  departures and arrivals for both your outgoing and return
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
