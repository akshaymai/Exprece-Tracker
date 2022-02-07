import React from "react";
import "./chartBar.css";

const ChartBar = (props) => {
  let barfillHight = "0%"; 
  if (props.maxValue > 0) {
    barfillHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar ">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill "
          style={{ height: barfillHight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
