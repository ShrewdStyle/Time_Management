import React, { Fragment } from "react";
import Intro from "../Layout/Home/Intro/Intro";
import IntroText from "../Layout/Home/IntroText/IntroText";
import Cards from "../Layout/Home/Cards/Cards";
import Quote from "../Layout/Home/Quote/Quote";

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <IntroText />
      <Cards />
      <Quote />
    </Fragment>
  );
};

export default Home;
