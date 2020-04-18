import React from "react";
import classes from "./AboutSectionTwo.module.css";

const AboutSectionTwo = () => {
  return (
    <div className={classes.AboutBody}>
      <div className={classes.AboutContainer}>
        <section
          className={classes.AboutSection}
          className={classes.AboutSection}
          data-aos-delay="100"
          data-aos="fade-up"
        >
          <div className={classes.Number}>
            <div className={classes.AboutNumber}>
              02
              <div className={classes.NumberLine}></div>
            </div>
          </div>
          <div className={classes.BodyTitle}>Efficiency </div>
          <div className={classes.BodyText}>
            Once you realise how much time you have left in the day, you are
            subconsciously keeping track, and once you realise that, you are
            able to allocate time to tasks and activities you would previously
            have never thought about.
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
