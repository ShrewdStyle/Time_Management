import React from "react";
import classes from "./IntroText.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroText = () => {
  AOS.init({
    duration: 2000
  });

  return (
    <div className={classes.IntroTextContainer}>
      <div
        className={classes.IntroTextTitle}
        data-aos-delay="100"
        data-aos="fade"
      >
        This App will provide you with a visual overview of your time spent
        during each day.
      </div>
      <div
        className={classes.IntroTextBody}
        data-aos-delay="100"
        data-aos="fade-left"
      >
        <div className={classes.IntroText}>
          Everyone wants to get more done, to learn new things and progress in
          life, but no matter how hard we try, we are always restricted by time.
        </div>
        <div className={classes.IntroText}>
          This application aims to help you manage your time more efficiently by
          giving you a visual representation of how you are spending your day.
          This will allow you to realise where you spending the majority of your
          time, and help you plan your time better.
        </div>
      </div>
    </div>
  );
};

export default IntroText;
