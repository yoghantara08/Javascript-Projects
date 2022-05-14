import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-2.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Hero
        image={Image}
        title="Beatiful views"
        description="Never seen before"
      />
    </>
  );
};

export default About;
