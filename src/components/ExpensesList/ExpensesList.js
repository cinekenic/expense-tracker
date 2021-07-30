import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "../../scss/style.scss";

const ExpensesList = (props) => {
  console.log(props.selected);
  console.log(props.year);

  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found in {props.year}
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
