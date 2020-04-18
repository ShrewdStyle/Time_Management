import React from "react";
import classes from "./Cards.module.css";
import "aos/dist/aos.css";

const Cards = () => {
  return (
    <div>
      <div className={classes.CardsContainer}>
        <div id={classes.Card1}>
          <div data-aos="fade" data-aos-delay="50">
            <div className={classes.CardShapes}>
              <div className={classes.Circle1}></div>
              <div className={classes.Circle2}></div>
            </div>
            <div className={classes.Action}>Build</div>
            <div className={classes.CardTitle}>Keep Track Of Your Time</div>
            <div className={classes.CardBody}>
              This application will allow you to enter every activity which you
              will usually do during the day and return how many hours of the
              day you will have free after doing these activities.
            </div>
          </div>
        </div>
        <div id={classes.Card2}>
          <div data-aos="fade" data-aos-delay="300">
            <div className={classes.CardShapes}>
              <div className={classes.Square1}></div>
              <div className={classes.Square2}></div>
            </div>
            <div className={classes.ActionDark}>Analyse</div>
            <div className={classes.CardTitleDark}>Evaluate Your Time</div>
            <div className={classes.CardBodyDark}>
              Once your activities have been entered, this application will then
              show you a visual graph of what is taking up the majority of your
              time. You will be able to analyse your results and make changes in
              your daily tasks to save you time in the future, sometimes we do
              not realise how much of our week some tasks take.
            </div>
          </div>
        </div>
        <div id={classes.Card3}>
          <div data-aos="fade" data-aos-delay="450">
            <div className={classes.CardShapes}>
              <div className={classes.Triangle1}></div>
              <div className={classes.Triangle2}></div>
            </div>
            <div className={classes.Action}>Learn & Improve</div>
            <div className={classes.CardTitle}>Take Action</div>
            <div className={classes.CardBody}>
              Once you have seen how your time is being spent, you will then be
              able to realise what is taking up the most time in your day, and
              this will ultimately help you plan your day better. Take action
              and use this data to plan for the activities you have previously
              never been able to do.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
