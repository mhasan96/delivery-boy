import React from "react";
import Services from "../Services/Services";

import Slides from "../Slides/Slides";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div>
      <Slides></Slides>
      <Features></Features>
      <Services></Services>
    </div>
  );
};

export default Home;
