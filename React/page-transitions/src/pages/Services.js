import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-3.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <Hero
        image={Image}
        title="Look at this bird"
        description="Can you believe this?"
      />
    </>
  );
};

export default Services;
