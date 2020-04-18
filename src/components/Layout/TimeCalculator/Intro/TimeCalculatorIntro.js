import React from "react";
import classes from "./TimeCalculatorIntro.module.css";

const TimeCalculatorIntro = () => {
  return (
    <div>
      <div className={classes.IntroContainer}>
        <h1 className={classes.Title}>Time Management Application</h1>
        <div className={classes.IntroText}>
          We've all heard the saying... "I just don't have enough time", with
          this application you are able to see your daily activities and get an
          idea of how much free time you will have during the day. Figure our
          how you can manage that time and use it to help yourself become more
          productive.
        </div>
      </div>
    </div>
  );
};

export default TimeCalculatorIntro;
