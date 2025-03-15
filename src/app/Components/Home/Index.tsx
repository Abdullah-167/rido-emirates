import React from "react";
import Layout from "../Layout/Index";
import Hero from "./Hero";
import HomeContact from "./HomeContact";
import About from "./About";
import TimelineSection from "./TimelineSection";
import CarLift from "./CarLift";
import FAQSection from "./FAQSection"; // Correct path if both are in the same folder
import Services from "./Services";
import FooterBanner from "./FooterBanner";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <HomeContact />
      <About />
      <TimelineSection />
      <CarLift />
      <FAQSection />
      <Services />
      <FooterBanner />
    </Layout>
  );
};

export default HomePage;
