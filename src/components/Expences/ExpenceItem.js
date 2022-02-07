import "./ExpenceItem.css";
import ExpenceDate from "../Expences/ExpenceDate";
import Card from "../Ui/card";
// import { useState } from "react";
function ExpenceItem(props) {
  const { date, price, discrption,id } = props; 

   const handledelete=()=>{ 
     props.deletehaandelar(id)
   }
  return (
    
    <Card className="expense-item ">
      <ExpenceDate date={date} />
      <div className="expense-item__description ">
        <h2>{discrption}</h2>
        <div className="expense-item__price">${price}</div>
        <div className="expense-item__price" onClick={handledelete}>Delete</div>

      </div>
      {/* <button onClick={buttonHandle}>click me</button> */}
    </Card>
  );
}
export default ExpenceItem;
