import React, { useState } from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../uis/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    let filterInfoText = '2019, 2020 & 2022';

    if (filterYear === '2019') {
        filterInfoText = '2020, 2021 & 2022';
    } else if (filterYear === '2020') {
        filterInfoText = '2019, 2021 & 2022';
    } else if (filterYear === '2021') {
        filterInfoText = '2019, 2020 & 2022';
    } else {
        filterInfoText = '2019, 2020 & 2021';
    }

    const expenseFilterChange = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter defaultYear={filterYear} onExpenseFilterChange={expenseFilterChange}></ExpenseFilter>
            <p>Data for years {filterInfoText} is hidden.</p>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;