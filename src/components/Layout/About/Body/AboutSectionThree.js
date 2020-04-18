import React from "react";
import classes from "./AboutSectionThree.module.css";

const AboutSectionThree = () => {
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
              03
              <div className={classes.NumberLine}></div>
            </div>
          </div>
          <div className={classes.BodyTitle}>Execution</div>
          <div className={classes.BodyText}>
            Just because you are doing a lot... Doesn't mean you are getting a
            lot done.
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSectionThree;
