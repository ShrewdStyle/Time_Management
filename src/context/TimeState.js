import React from "react";
import TimeContext from "./timeContext";
import TimeReducer from "./timeReducer";

const TimeState = props => {
  return (
    <TimeContext.Provider value={{}}>{props.children}</TimeContext.Provider>
  );
};

export default TimeState;
