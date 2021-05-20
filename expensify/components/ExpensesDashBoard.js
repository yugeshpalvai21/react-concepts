import React from 'react';
import { connect } from 'react-redux';
import { Expense } from './Expense.js';


const ExpensesList = (props) => {
    return (
        <div>
            <h1>Expenses List</h1>
            { props.expenses.map((expense) => <Expense key={expense.id} expense={expense} /> )}
        </div>
    )
}

const expenses = (state) => {
    return {
        expenses: state.expenses,
    }
}

const ExpensesDashBoard = connect(expenses)(ExpensesList);


export { ExpensesDashBoard }