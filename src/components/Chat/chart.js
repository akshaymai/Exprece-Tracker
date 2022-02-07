import React from "react";
import "./chart.css";
import ChartBar from "./chartBar";

const Chart = (props) => {
  const dataPointValue=props.dataPoints.map((item)=>item.value)
  const totalmax=Math.max(...dataPointValue) 
  return (
    <div className="chart">
      
      {props.dataPoints.map((datapoint) =>{ 
        return (
          <ChartBar 
          maxValue={totalmax}
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.lebel}     
          />
        )
      })}
    </div>
  );
};
export default Chart;