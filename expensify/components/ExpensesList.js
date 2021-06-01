import React from 'react';
import { connect } from 'react-redux';

const ListItems = (props) => <h4>Expenses Count - { props.expenses.length }</h4>;

const ExpensesList = connect((state) => ({
    expenses: state.expenses
}))(ListItems)

export { ExpensesList }