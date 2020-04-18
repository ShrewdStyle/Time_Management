import React, { Fragment } from "react";
import AboutIntro from "../Layout/About/Intro/AboutIntro";
import AboutSectionOne from "../Layout/About/Body/AboutSectionOne";
import AboutSectionTwo from "../Layout/About/Body/AboutSectionTwo";
import AboutSectionThree from "../Layout/About/Body/AboutSectionThree";

const About = () => {
  return (
    <Fragment>
      <AboutIntro />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </Fragment>
  );
};

export default About;
