import React from "react";
import Banner from "../../Components/Banner";
import About from "../About";
import Portfolio from "../Portfolio"
import Capability from "../Capability";
import Client from "../Client";
import Contact from "../Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      <Capability />
      <Client />
      <Contact />
    </div>
  );
};

export default Home;
