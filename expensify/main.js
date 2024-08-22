import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './components/AppRouter.js';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore.js';
import { AddExpense } from './actions/expenses.js';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const domElement = document.getElementById('app');
ReactDOM.render(jsx, domElement);


// console.log(store);
// console.log(store.getState());
// setInterval(() => {
//     store.dispatch(AddExpense());
// }, 3000);
// console.log(store.getState());




