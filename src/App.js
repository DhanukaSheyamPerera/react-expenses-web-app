import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insuarance",
    amount: 240.25,
    date: new Date(2024, 4, 23)
  },
  {
    id: "e2",
    title: "Food",
    amount: 15.75,
    date: new Date(2024, 4, 1)
  },
  {
    id: "e3",
    title: "Tea",
    amount: 5.12,
    date: new Date(2024, 4, 4)
  },
  {
    id: "e4",
    title: "Electricity Bill",
    amount: 300.51,
    date: new Date(2024, 4, 30)
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);

    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
