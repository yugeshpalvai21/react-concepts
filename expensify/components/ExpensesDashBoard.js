import React from 'react';
import { ExpensesList } from './ExpensesList.js';

const ExpensesDashBoard = (props) => {
    return (
        <div>
            <h1>This is Expenses Dash Board</h1>
            <ExpensesList />
        </div>
    )
}


export { ExpensesDashBoard }