import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-1.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime"
      />
    </>
  );
};

export default Home;
