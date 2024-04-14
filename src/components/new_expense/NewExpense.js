import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    }

    const hideFormHandler = () => {
        setShowForm(false);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            {!showForm && <button type="button" onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} hideForm={hideFormHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;