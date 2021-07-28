import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "../../scss/style.scss";

function ExpenseItem(props) {
  console.log(props);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
