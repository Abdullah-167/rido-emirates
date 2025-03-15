"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change the navbar style when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:block hidden fixed top-4 left-1/2 transform -translate-x-1/2 max-w-[1300px] w-full z-50 px-6 rounded-full transition-all duration-500 ${
        scrolled ? "bg-white/80" : "bg-[#07aae7]/80"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-2">
        <div className="transition-all duration-300">
          {scrolled ? (
            <Link href={"/"}>
              <Image
                src="/data/logo.png" // Logo when scrolled
                className={`max-h-[70px] object-cover transition-all duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
                alt={"Logo"}
                width={200}
                height={100}
              />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image
                src="/data/logo2.png"
                className={`max-h-[70px] object-cover transition-all duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
                alt={"Logo"}
                width={300}
                height={100}
              />
            </Link>
          )}
        </div>

        <div className="flex space-x-8">
          <FlyoutLink href="/services" FlyoutContent={PricingContent}>
            Services
          </FlyoutLink>
          <NavLink href="/booking">Book Ride</NavLink>
          <NavLink href="/about">About Us</NavLink>
        </div>
        <div>
          <a
            href="/booking"
            className={`relative font-medium transition-all duration-500 px-3 py-2 rounded-full ${
              scrolled
                ? "text-white hover:text-[#07aae7] bg-[#07aae7] hover:bg-transparent border hover:border-[#07aae7]"
                : "hover:text-[#07aae7] hover:bg-white border border-white bg-transparent text-white"
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

// Component for normal nav links without dropdown
interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const [scrolled, setScrolled] = useState(false);

  // Change the navbar style when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={href}
      className={`relative font-medium transition-all duration-500 ${
        scrolled ? "text-black" : "text-white"
      }`}
    >
      {children}
    </a>
  );
};

// Flyout link (Dropdown) remains for Services
interface FlyoutLinkProps {
  children: React.ReactNode;
  href: string;
  FlyoutContent: React.ComponentType;
}

const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  const [scrolled, setScrolled] = useState(false);

  // Change the navbar style when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className={`relative font-medium transition-all duration-500 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-300 ease-out ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -left-24 top-[30px] mt-2 bg-white rounded-lg p-2"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Services Dropdown Content
const PricingContent = () => (
  <div className="w-64 p-4 rounded-lg shadow-xl backdrop-blur-lg">
    <a
      href="/services/dubai-to-abudhabi"
      className="block text-sm hover:underline pb-2"
    >
      Dubai To Abudhabi
    </a>
    <a
      href="/services/abudhabi-to-dubai"
      className="block text-sm hover:underline pb-2"
    >
      Abudhabi To Dubai
    </a>
    <a href="/services/airport" className="block text-sm hover:underline pb-2">
      Airport
    </a>
    <a href="/services/casino" className="block text-sm hover:underline pb-2">
      Casino
    </a>
    <a href="/services/birthday" className="block text-sm hover:underline pb-2">
      Birthday
    </a>
    <a href="/services/wedding" className="block text-sm hover:underline pb-2">
      Wedding
    </a>
    <a href="/services/night" className="block text-sm hover:underline pb-2">
      Night
    </a>
  </div>
);

export default Navbar;