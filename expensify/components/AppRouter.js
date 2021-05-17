import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Header } from './Header.js';
import  {ExpensesDashBoard} from './ExpensesDashBoard.js';
import { addExpense } from './addExpense.js';
import { editExpense } from './editExpense.js';
import { HelpPage } from './help.js';
import {NotFound} from './NotFoundPage.js';

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

export { jsx }