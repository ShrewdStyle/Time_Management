import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterBody}>
          <div className={classes.FooterMain}>
            <div className={classes.FooterHeader}>
              Productivity Makes <span>Time</span>
            </div>
            <div className={classes.SocialMediaHeader}>
              Follow us on social media
            </div>
            <div className={classes.FooterSocialMedia}>
              <div className={classes.SocialDiv}>
                <a
                  href="https://www.linkedin.com/in/jake-knight-811240b1/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
              </div>
              <div className={classes.SocialDiv}>
                <a
                  href="https://twitter.com/explore"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className={classes.SocialDiv}>
                <a
                  href="https://facebook.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f fa-2x"></i>
                </a>
              </div>
              <div className={classes.SocialDiv}>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
            <div className={classes.FooterFrom}>
              Created & Designed by <span>Jake Knight</span> &#169;2020
            </div>
          </div>
          <div className={classes.FooterText}>
            <div className={classes.FooterUnderline}>
              Designed to help you manage time
            </div>
            <div className={classes.FooterUnderline}>
              Gives you the ability to manage better
            </div>
            <div className={classes.FooterUnderline}>
              Achieve new goals each week
            </div>
          </div>
          <div className={classes.FooterJoin}>
            <div className={classes.JoinTitle}>SIGN UP</div>
            <div className={classes.JoinText}>
              Sign up and keep track of your time.
            </div>
            <Link to="/signup">
              <button className={classes.SignUpBtn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
