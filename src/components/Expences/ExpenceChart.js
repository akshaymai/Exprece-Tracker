import React from "react";
import Chart from "../Chat/chart";

const ExpenceChart = (props) => {
  const statticData = [
    { lebel: "jan", value: 0 },
    { lebel: "feb", value: 0 },
    { lebel: "mar", value: 0 },
    { lebel: "april", value: 0 },
    { lebel: "may", value: 0 },
    { lebel: "june", value: 0 },
    { lebel: "july", value: 0 },
    { lebel: "aug", value: 0 },
    { lebel: "sep", value: 0 },
    { lebel: "oct", value: 0 },
    { lebel: "nov", value: 0 },
    { lebel: "dec", value: 0 }
  ];

  for (const updatedData of props.expenses) {
  
    const expensemonth=updatedData.date.getMonth();
    statticData[expensemonth].value +=updatedData.price;
      
  }
//   console.log('jjjjjjjjjjjj',statticData)
  return (
    <>
      <Chart dataPoints={statticData} />
    </>
  );
};

export default ExpenceChart;
