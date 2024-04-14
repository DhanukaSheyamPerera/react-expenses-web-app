import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../uis/Card';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log("Button Clicked!");
    }
    
    return (
        <Card className="expense-item">

            <ExpenseDate dateObject={props.date}></ExpenseDate>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;