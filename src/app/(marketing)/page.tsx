"use client";

import { Button } from "antd";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Footer from "./_components/footer";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const user = useSelector((state: any) => state.user);
  // console.log(user);
  return (
    <div className="landig-main bg-gradient-to-r from-blue-900 to-blue-600 w-full md:h-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
