import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expensesReducer.js';
import { filtersReducer } from '../reducers/filtersReducer.js';

const configureStore = () => {
    const store = createStore(combineReducers({expenses: expensesReducer, 
                                                filters: filtersReducer }));
    return store;
}

export { configureStore };