import React, { useState } from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../uis/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    const expenseFilterChange = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter defaultYear={filterYear} onExpenseFilterChange={expenseFilterChange}></ExpenseFilter>
            {props.items.map((element) => {
                return (
                <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}>
                </ExpenseItem>);
            })}
        </Card>
    );
}

export default Expenses;