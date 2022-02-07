import "./Expence.css";
import Card from "../Ui/card";
import ExpensesFilter from "./ExpenceFilter";
import { useState } from "react";
import ExpenceList from "./ExpenceList";
import ExpenceChart from "./ExpenceChart";

function Expence(props) {
  const [datepick, setDatePick] = useState("2019");

  const selectYear = (item) => {
    setDatePick(item);
  };

  const filterExpemce = props.data.filter(
    (ites) =>
      ites.date.toLocaleString("en-US", { year: "numeric" }) === datepick
  );

  const filterDelete = (id) => {
    props.data.filter((it) => it.id !== id);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={datepick} handleSelecteData={selectYear} />
        <ExpenceChart expenses={filterExpemce} />
        <ExpenceList selectDropdowndata={filterExpemce} vvv={filterDelete} />
      </Card>
    </div>
  );
}

export default Expence;
