import React from "react";
import classes from "./SignupWelcome.module.css";
import thankyou from "./thankyou.jpg";

const SignupWelcome = () => {
  return (
    <div className={classes.SignupContainer}>
      <img className={classes.ThankyouImg} src={thankyou} alt="Thank you" />
      <div className={classes.ThankyouBody}>
        Thank you for sticking with us and keeping up to date with all of our
        latest releases and updates.
      </div>
    </div>
  );
};

export default SignupWelcome;
