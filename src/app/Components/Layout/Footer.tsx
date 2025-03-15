import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Left Block - Logo & Brand Info */}
        <div>
          <Image
            src="/data/logo2.png" // Logo when scrolled
            className={`max-h-[90px] sm:max-w-[400px] object-cover transition-all duration-500 `}
            alt={"Logo"}
            width={400}
            height={100}
          />{" "}
          <p className="text-gray-400 mt-2">
            Elevate your style with our premium watches. Designed for elegance
            and crafted for perfection.
          </p>
        </div>

        {/* Middle Block - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/dubai-to-abudhabi"
                className="text-gray-400 hover:text-white"
              >
                Dubai to Abu Dhabi
              </Link>
            </li>
            <li>
              <Link
                href="/services/abudhabi-to-dubai"
                className="text-gray-400 hover:text-white"
              >
                Abu Dhabi to Dubai
              </Link>
            </li>
            <li>
              <Link href="/services/night" className="text-gray-400 hover:text-white">
                Parties
              </Link>
            </li>
            <li>
              <Link href="/services/casino" className="text-gray-400 hover:text-white">
                Casinos
              </Link>
            </li>
            <li>
              <Link href="/services/wedding" className="text-gray-400 hover:text-white">
                Wedding
              </Link>
            </li>
            <li>
              <Link href="/services/airport" className="text-gray-400 hover:text-white">
                Airports
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Block - More Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-gray-400 hover:text-white">
                Book Your Ride
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Rido Emirate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
