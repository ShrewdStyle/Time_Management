import React from "react";
import classes from "./AboutSectionOne.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionOne = () => {
  AOS.init({
    duration: 2000
  });

  return (
    <div className={classes.AboutBody}>
      <div className={classes.AboutContainer}>
        <section
          className={classes.AboutSection}
          data-aos-delay="100"
          data-aos="fade-up"
        >
          <div className={classes.Number}>
            <div className={classes.AboutNumber}>
              01
              <div className={classes.NumberLine}></div>
            </div>
          </div>
          <div className={classes.BodyTitle}>Productivity</div>
          <div className={classes.BodyText}>
            We believe that the key to success is proper planning. With a plan
            you are able to get things done, and the small things that keep
            getting done, mount up over time.
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSectionOne;
