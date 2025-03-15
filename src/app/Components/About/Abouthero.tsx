import React from "react";

const Abouthero = () => {
  return (
    <section className="pb-20 pt-40">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Your Trusted Car Lift Experts in the UAE
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          RidoEmirates is a premier car ride service based in the Emirates,
          offering both shared and private taxi rides for a seamless and
          comfortable travel experience. Whether you need a quick trip across
          the city or a private ride for a more personalized journey, our
          reliable and affordable services are designed to meet your needs. With
          professional drivers, modern vehicles, and a commitment to safety and
          convenience, we ensure every ride is smooth and hassle-free.
          Experience the best in transportation with RidoEmirates. Book your
          ride now!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-transparent hover:bg-[#07aae7] hover:text-white transition-all duration-200 border border-[#07aae7] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Diverse Fleet of Vehicles
            </h2>
            <p className="">
              From compact cars to spacious SUVs, we offer a variety of options
              to suit your needs.
            </p>
          </div>
          <div className="bg-transparent hover:bg-[#07aae7] hover:text-white transition-all duration-200 border border-[#07aae7] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Honest and Affordable Rates
            </h2>
            <p className="">
              Transparent pricing with no surprises—just great value for your
              money.
            </p>
          </div>
        </div>
        <button className="mt-12 bg-[#07aae7] text-white px-8 py-3 rounded-full font-semibold">
          Reserve Your Ride Now
        </button>
      </div>
    </section>
  );
};

export default Abouthero;
