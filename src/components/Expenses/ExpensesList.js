import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    // let expensesContent = <p>No Expenses found.</p>;

    // if (props.filteredItems.length > 0) {
    //     expensesContent = props.filteredItems.map(
    //         (element) => {
    //             return (
    //                 <ExpenseItem
    //                     key={element.id}
    //                     title={element.title}
    //                     amount={element.amount}
    //                     date={element.date}>
    //                 </ExpenseItem>
    //             );
    //         }
    //     );
    // }

    if (props.filteredItems.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Sorry! We could not find any items...</h2>
        );
    }

    return (
        <ul className="expenses-list">
            {props.filteredItems.map(
                (element) => {
                    return (
                        <ExpenseItem
                            key={element.id}
                            title={element.title}
                            amount={element.amount}
                            date={element.date}>                                
                            </ExpenseItem>
                    );
                }
            )}
        </ul>
    );
}

export default ExpensesList;