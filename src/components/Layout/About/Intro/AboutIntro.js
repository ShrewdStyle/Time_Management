import React from "react";
import Typist from "react-typist";
import classes from "./AboutIntro.module.css";
import data from "./data.jpg";

const AboutIntro = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${data})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className={classes.AboutIntro}
    >
      <div className={classes.AboutIntroContainer}>
        <Typist
          className={classes.AnimText}
          avgTypingDelay={100}
          cursor={{ show: false }}
        >
          <Typist.Delay ms={500} />
          <div className={classes.IntroHeader}>
            Why Our <br /> Application?
          </div>
        </Typist>
      </div>
    </div>
  );
};

export default AboutIntro;
