"use client";
import React, { useEffect } from "react";
import Hero from "./component/hero";
import Recentpost from "./component/recentpost";
import Feature from "./component/feature";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div data-aos="fade-down">
      <Hero />
      <Recentpost />
      <Feature />
    </div>
  );
};

export default Page;
