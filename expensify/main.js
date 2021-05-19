import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore.js';
import { AppRouter } from './components/AppRouter.js';
import { AddExpense } from './actions/expenses.js';

const store = configureStore();



const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
);

const domElement = document.getElementById('app');
ReactDOM.render(jsx, domElement);


// setInterval(() => {
//     store.dispatch(AddExpense())
// }, 5000);




