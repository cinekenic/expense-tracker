import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../../scss/style.scss";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
