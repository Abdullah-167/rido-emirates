import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ResponsiveNav from "./ResponsiveNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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