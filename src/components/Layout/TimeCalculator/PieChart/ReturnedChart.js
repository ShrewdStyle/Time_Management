import React from "react";
import classes from "./ReturnedChart.module.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const ReturnedChart = props => {
  const activityData = [
    ...props.pieData.map(el => ({
      name: el.title,
      data: Number(el.amount)
    }))
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#ffc3a0",
    "#bada55",
    "#696969",
    "#d3ffce",
    "#b0e0e6",
    "#ff7979",
    "#6897bb",
    "#065535",
    "#000000",
    "#ffff00"
  ];

  const remainingTime = (
    (1440 -
      [...props.pieData.map(el => Number(el.amount))].reduce(
        (a, b) => a + b,
        0
      )) /
    60
  ).toFixed(2);

  console.log(remainingTime);

  // const data = [
  //   { name: "Group A", data: 400 },
  //   { name: "Group B", data: 300 },
  //   { name: "Group C", data: 300 },
  //   { name: "Group D", data: 200 },
  //   { name: "Group E", data: 278 },
  //   { name: "Test Data", data: 189 }
  // ];

  return (
    <div className={classes.PieChartContainer}>
      <div className={classes.PieHeader}>
        Below is an analytical representation of your daily activities
      </div>
      <div className={classes.ReturnedChartContainer}>
        <div className={classes.PieChartGraph}>
          <ResponsiveContainer
            className={classes.ResponsiveContainer}
            width={400}
            height="80%"
          >
            <PieChart>
              <Pie
                dataKey="data"
                isAnimationActive={false}
                data={activityData}
                outerRadius={180}
                fill="#20b2aa"
                label
              >
                {activityData.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.HoursLeft}>
          <div className={classes.RemainingTime}>
            You still have <span>{remainingTime}</span> hours of the day
            remaining
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnedChart;
