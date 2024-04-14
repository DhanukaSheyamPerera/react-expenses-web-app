import './ExpenseDate.css';

function ExpenseDate(props){
    console.log("ExpenseDate" + props.dateObject);
    const month = props.dateObject.toLocaleString('en-US', {month: 'long'});
    const day = props.dateObject.toLocaleString('en-US', {day: '2-digit'});
    const year = props.dateObject.getFullYear().toString();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;