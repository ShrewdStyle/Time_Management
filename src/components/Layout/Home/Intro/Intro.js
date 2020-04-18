import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Intro.module.css";
import Pie from "./pie.png";
import timelapse from "./img/timelapse.jpg";

const Intro = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${timelapse})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className={classes.IntroContainer}
      >
        <div className="container">
          <div className={classes.Intro}>
            <div className={classes.IntroGroup}>
              <h1 className={classes.Title}>
                Time Management App For Daily Goals
              </h1>
              <Link to="/timecalculator">
                <button className={classes.BtnMain}>Try it, it's free</button>
              </Link>
              <div className="intro-text">
                <div className={classes.IntroImg}>
                  <img className={classes.Pie} src={Pie} alt="Pie Chart" />
                  <div id={classes.Stat1}>
                    Analytics to help improve your time management.
                  </div>
                  <div id={classes.Stat2}>
                    Achieve new goals with better managed time.
                  </div>
                  <div id={classes.Stat3}>
                    Understand how your time is getting used.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
