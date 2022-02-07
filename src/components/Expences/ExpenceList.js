import React from "react";
import ExpenceItem from "./ExpenceItem";
import "./EXpenceList.css";

const ExpenceList = (props) => {
  if (props.selectDropdowndata.length === 0) {
    return <h2 className="expenses-list__fallback">No Record found</h2>;
  }

  const hamdle = (id) => {
    props.vvv(id);
  };

  return (
    <ul className="expenses-list">
      {props.selectDropdowndata.map((item, index) => {
        return (
          <ExpenceItem
            key={index}
            date={item.date}
            price={item.price}
            discrption={item.discription}
            id={item.id}
            deletehaandelar={hamdle}
          />
        );
      })}
    </ul>
  );
};

export default ExpenceList;
