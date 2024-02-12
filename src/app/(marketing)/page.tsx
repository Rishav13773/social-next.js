import { Button } from "antd";
import React from "react";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <div className="landig-main bg-gradient-to-r from-blue-900 to-blue-600 w-full md:h-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
