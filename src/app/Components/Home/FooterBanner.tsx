import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterBanner = () => {
  return (
    <section className=" relative max-h-[350px]">
      <div className="max-h-[350px] mx-auto relative text-center text-white">
        <Image
          src="/data/footerbanner.jpg"
          alt="Footer Banner"
          width={1000}
          height={1000}
          className="w-full "
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <Link href={"/booking"}>
        <button className=" cursor-pointer bottom-7 absolute bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600  z-10">
          Book Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default FooterBanner;
