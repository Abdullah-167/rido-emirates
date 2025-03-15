"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Define services with their respective links
  const services = [
    { name: "Dubai To Abudhabi", link: "/services/dubai-to-abudhabi" },
    { name: "Abudhabi To Dubai", link: "/services/abudhabi-to-dubai" },
    { name: "Airport", link: "/services/airport" },
    { name: "Casino", link: "/services/casino" },
    { name: "Birthday", link: "/services/birthday" },
    { name: "Wedding", link: "/services/wedding" },
    { name: "Night", link: "/services/night" },
  ];
  // Framer Motion Variants
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="md:hidden bg-[#07aae7] text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <Link href={"/"}>
            <Image
              src="/data/logo2.png" // Logo when scrolled
              className={`max-h-[70px] object-cover transition-all duration-500`}
              alt={"Logo"}
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none z-[1000]"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white mb-1 transition-all"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white mb-1 transition-all"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-400 transition-colors"
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-400 transition-colors"
          >
            About
          </motion.a>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.1 }}
              className="hover:text-gray-400 transition-colors"
            >
              Services
            </motion.a>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="h-0"
                  animate="h-full"
                  exit="exit"
                  className="absolute left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg p-2"
                >
                  {services.map((service, i) => (
                    <motion.a
                      key={i}
                      href={service.link} // Add link here
                      className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors"
                    >
                      {service.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href="/booking"
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-400 transition-colors"
          >
            Book Ride Now
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[64px] left-0 w-full h-screen bg-[#07aae7] bg-opacity-90 backdrop-blur-lg flex flex-col justify-center items-center sm:hidden"
          >
            <motion.a
              href="/"
              className="text-2xl mb-4 hover:text-gray-400 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              className="text-2xl mb-4 hover:text-gray-400 transition-colors"
            >
              About
            </motion.a>

            {/* Services Dropdown for Mobile */}
            <div className="flex flex-col items-center">
              <button
                className="text-2xl mb-4 hover:text-gray-400 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="h-0"
                    animate="h-full"
                    exit="exit"
                    className="flex flex-col items-center rounded-lg p-2"
                  >
                    {services.map((service, i) => (
                      <motion.a
                        key={i}
                        href={service.link} // Add link here
                        className="px-4 py-2 text-lg hover:bg-gray-700 rounded transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="/contact"
              className="text-2xl mb-4 hover:text-gray-400 transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNav;
