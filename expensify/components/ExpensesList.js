import React from 'react';
import { connect } from 'react-redux';
import { Expense } from './Expense.js';

const ListItems = (props) => (
    <div>
        {props.expenses.map((expense) => <Expense key={expense.id} {...expense} />)}
    </div>
)

const ExpensesList = connect((state) => ({
    expenses: state.expenses
}))(ListItems)

export { ExpensesList }