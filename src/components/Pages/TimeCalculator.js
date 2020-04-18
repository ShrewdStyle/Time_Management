import React, { Fragment } from "react";
import TimeCalculatorIntro from "../Layout/TimeCalculator/Intro/TimeCalculatorIntro";
import InputField from "../Layout/TimeCalculator/CalculatorForm/InputField";
import ReturnedChart from "../Layout/TimeCalculator/PieChart/ReturnedChart";

const TimeCalculator = () => {
  return (
    <Fragment>
      <TimeCalculatorIntro />
      <InputField />
    </Fragment>
  );
};

export default TimeCalculator;
