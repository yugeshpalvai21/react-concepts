import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './components/AppRouter.js';

import { configureStore } from './store/configureStore.js';
import { AddExpense } from './actions/expenses.js';

const domElement = document.getElementById('app');
ReactDOM.render(<AppRouter />, domElement);

const store = configureStore();

console.log(store);
console.log(store.getState());
store.dispatch(AddExpense());
console.log(store.getState());




