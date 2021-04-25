import { createStore, combineReducers } from 'redux';

const productsReducer = (state = []) => {
    return state;
}
const filtersReducer = (state = {}) => {
    return state;
}

const store = createStore(combineReducers({products: productsReducer, filters: filtersReducer}));

console.log(store.getState());

