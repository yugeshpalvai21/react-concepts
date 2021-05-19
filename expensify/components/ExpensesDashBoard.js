import React from 'react';
import { connect } from 'react-redux';

const ExpensesList = (props) => {
    return (
        <div>
            <h1>This is Expenses Dash Board</h1>
        </div>
    )
}

const expenses = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const ExpensesDashBoard = connect(expenses)(ExpensesList);


export { ExpensesDashBoard }