import React from 'react';
import ReactDOM from 'react-dom';


import { configureStore } from './store/configureStore.js';
import { AddExpense } from './actions/expenses.js';
import { visibleExpenses } from './selectors/visibleExpenses.js'; 

import { jsx } from './components/AppRouter.js';

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);

const store = configureStore();

console.log(store.getState());

store.dispatch(AddExpense({ description: 'new expense adding', price: 99.99}));

console.log(store.getState());


