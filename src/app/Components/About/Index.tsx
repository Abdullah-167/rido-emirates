import React from "react";
import AboutHero from "./Abouthero";
import Layout from "../Layout/Index";
import OurMission from "./OurMission";
import WhyChooseUs from "./WhyChooseUs";
import AboutContact from "./AboutContact";

const Aboutus = () => {
  return (
    <Layout>
      <AboutHero />
      <OurMission />
      <WhyChooseUs />
      <AboutContact />
    </Layout>
  );
};

export default Aboutus;
