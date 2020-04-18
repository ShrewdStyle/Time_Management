import React, { useEffect, useState, Fragment } from "react";
import classes from "./InputField.module.css";
import ReturnedChart from "../PieChart/ReturnedChart";

const InputField = () => {
  const [input, setInput] = useState("");
  const [minutes, setMinutes] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = e => {
    e.preventDefault();

    if (input === "" || minutes === "") {
      alert("Please enter a value");
    } else {
      addTaskHandler({ title: input, amount: minutes });
      setInput("");
      setMinutes("");
    }
  };

  const addTaskHandler = e => {
    fetch("https://time-management-database.firebaseio.com/activities.json", {
      method: "POST",
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setTasks(prevTask => [...prevTask, { id: responseData.name, ...e }]);
      });
  };

  const removeActivityHandler = activityId => {
    fetch(
      `https://time-management-database.firebaseio.com/activities/${activityId}.json`,
      {
        method: "DELETE"
      }
    ).then(response => {
      setTasks(prevTask =>
        prevTask.filter(activity => activity.id !== activityId)
      );
    });
  };

  useEffect(() => {
    fetch("https://time-management-database.firebaseio.com/activities.json")
      .then(response => response.json())
      .then(responseData => {
        const loadedActivities = [];
        for (const key in responseData) {
          loadedActivities.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        setTasks(loadedActivities);
      });
  }, []);

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.InputContainer}>
          <div className={classes.InputFormSection}>
            <div className={classes.InputTitle}>
              To get started, enter your daily activities and time spent doing
              the activities below
            </div>
            <div className={classes.ActivityDiv}>
              <input
                className={classes.Activity}
                placeholder="Enter your activity"
                value={input}
                type="text"
                id="title"
                onChange={e => {
                  setInput(e.target.value);
                }}
              />
              <input
                type="number"
                id="amount"
                className={classes.Time}
                placeholder="Amount of minutes"
                onChange={e => {
                  setMinutes(e.target.value);
                }}
                value={minutes}
              />
            </div>
            <button className={classes.BtnInputSubmit}>Submit</button>
          </div>
          <div className={classes.OutputFormSection}>
            <div className={classes.MyActivities}>My Activities</div>
            <div className={classes.RemoveActivity}>
              (Click an activity to remove it)
            </div>
            <ul className={classes.ActivityList}>
              {tasks.map(el => (
                <li
                  key={el.id}
                  onClick={removeActivityHandler.bind(this, el.id)}
                >
                  <span className={classes.ListActivity}>{el.title}</span>
                  <span>{el.amount} minutes</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
      <ReturnedChart pieData={tasks} />
    </Fragment>
  );
};

export default InputField;
