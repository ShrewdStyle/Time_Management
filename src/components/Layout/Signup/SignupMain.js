import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./SignupMain.module.css";

const SignupMain = () => {
  const [emailState, setEmailState] = useState("");
  const [disabled, setDisabled] = useState(false);

  const emailHandeler = e => {
    if (
      emailState !== "" &&
      emailState.length > 10 &&
      emailState.includes("@") &&
      emailState.includes(".")
    ) {
      return;
    } else {
      e.preventDefault();
      alert("Please enter a valid email address");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.SignupContainer}>
      <div className={classes.SignupHeader}>Start Using Now</div>
      <div className={classes.SignupBody}>
        Take control of your time management and plan for a better future.
        <br /> Sign up and keep up to date with all our future releases.
      </div>
      <div className={classes.SignupBox}>
        <input
          className={classes.SignupEmail}
          type="email"
          placeholder="Enter your E-Mail address"
          value={emailState}
          onChange={e => {
            setEmailState(e.target.value);
          }}
        />
        <Link to="/signup/welcome">
          <button
            onClick={emailHandeler}
            disabled={disabled}
            className={classes.BtnSignup}
          >
            Sign up, it's free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignupMain;
