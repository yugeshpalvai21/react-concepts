import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import { configureStore } from './store/configureStore.js';
import { AddExpense } from './actions/expenses.js';
import { visibleExpenses } from './selectors/visibleExpenses.js'; 



const Header = () => {
    return (
        <div>
           <NavLink to="/">Expenses Dash Board</NavLink>
           <NavLink to="/addExpense">Add Expense</NavLink>
           <NavLink to="/editExpense">Edit Expense</NavLink>
           <NavLink to="/help">Help</NavLink> 
        </div>
    )
}

const ExpensesDashBoard = () => {
    return (
        <div>
            <h1>This is Expenses Dash Board</h1>
        </div>
    )
}

const addExpense = () => {
    return (
        <div>
            <h1>This is Add Expense Component</h1>
        </div>
    )
}

const editExpense = () => {
    return (
        <div>
            <h1>Edit Expense page....</h1>
        </div>
    )
}

const HelpPage = () => {
    return (
        <div>
            <h1>This is Help Page...</h1>
        </div>
    )
}

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found Error...</h1>
        </div>
    )
}

const jsx = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensesDashBoard}  exact={true} />
                <Route path="/AddExpense" component={addExpense} />
                <Route path="/EditExpense" component={editExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);


// console.log(typeof React);
// console.log(typeof ReactDOM);

// console.dir(React);

