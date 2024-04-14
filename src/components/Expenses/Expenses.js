import React, { useState } from 'react';

import './Expenses.css';

import Card from '../uis/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString());

    const expenseFilterChange = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((item) => {
        return (item.date.getFullYear().toString() === filterYear);
    });

    

    return (
        <Card className="expenses">
            <ExpenseFilter defaultYear={filterYear} onExpenseFilterChange={expenseFilterChange}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList filteredItems={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;