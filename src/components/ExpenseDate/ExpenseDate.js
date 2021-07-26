import "../../scss/style.scss";

function ExpenseDate(props) {
  console.log(props);
  const day = props.date.toLocaleString("pl-PL", { day: "2-digit" });
  const month = props.date.toLocaleString("pl-PL", { month: "short" });
  const year = props.date.toLocaleString("pl-PL", { year: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
