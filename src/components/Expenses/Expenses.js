import React, { useState } from "react";

import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../../scss/style.scss";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChengeHendler = (selectedYear) => {
    console.log("Expenses", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChengeHendler}
        />
        <ExpensesList year={filteredYear} items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
