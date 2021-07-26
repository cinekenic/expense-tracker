import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "../../scss/style.scss";

function ExpenseItem(props) {
  console.log(props);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;