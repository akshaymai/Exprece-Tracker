import React, { useState } from "react";
import "./newExpence.css";
import NewExpenceForm from "./newExpenceform";

const NewExpence = (props) => {
  const [isediting,setIsedinting]=useState(false)

  const saveExpenceDataHandlar = (enterExpenceData) => {
    const expenceData = {
      ...enterExpenceData,
      id: Math.random().toString(),
    };
    props.onallexpence(expenceData);
  };

  const handleEding=()=>{
    setIsedinting(true)
  }

  const handleCancle=()=>{
    setIsedinting(false)
  }
  return (
    <div className="new-expense">
      {isediting ===false && <button onClick={handleEding}> ADD Expence</button>}
     {isediting === true && <NewExpenceForm onSaveExpenceData={saveExpenceDataHandlar}handleCancle={handleCancle} />}
    </div>
  );
};
export default NewExpence;
