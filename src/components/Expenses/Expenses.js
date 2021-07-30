import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../../scss/style.scss";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChengeHendler = (selectedYear) => {
    console.log("Expenses", selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChengeHendler}
        />

        {props.items.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
