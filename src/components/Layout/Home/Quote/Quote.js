import React from "react";
import classes from "./Quote.module.css";
import Tilt from "react-parallax-tilt";

const Quote = () => {
  return (
    <div className={classes.QuoteContainer}>
      <Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className={classes.QuoteBody} data-aos-delay="250" data-aos="fade">
          <div className={classes.QuoteMain}>
            <span>“</span>Success isn’t always about ‘Greatness’, it’s about
            consistency. Consistent, hard work gains success. Greatness will
            come.
            <span>”</span>
          </div>
          <div className={classes.QuoteSub}>- Dwayne Johnson</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Quote;
