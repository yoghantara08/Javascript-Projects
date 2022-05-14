import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-3.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title="Look at this bird"
        description="Can you believe this?"
      />
    </motion.div>
  );
};

export default Services;
