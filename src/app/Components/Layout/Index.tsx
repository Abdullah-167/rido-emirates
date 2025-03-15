import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ResponsiveNav from "./ResponsiveNav";

const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      <ResponsiveNav />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
