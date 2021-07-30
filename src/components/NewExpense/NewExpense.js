import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../../scss/style.scss";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEditingHendler = () => {
    setIsEditing(true);
  };

  const stopEditingHendler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHendler}>Add New Expence</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHendler}
        />
      )}
    </div>
  );
};

export default NewExpense;
