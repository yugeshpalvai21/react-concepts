import { createStore, combineReducers } from 'redux';

const productsReducerDefaultData = [{id: '123', title: 'some product', price: '123', created_at: '123'}];

const productsReducer = (state = productsReducerDefaultData) => {
    return state;
}

const filtersReducerDefaultData = {
    text: "",
    sort_by: "price",
    startDate: "123",
    endDate: "123"
}

const filtersReducer = (state = filtersReducerDefaultData) => {
    return state;
}

const store = createStore(combineReducers({products: productsReducer, filters: filtersReducer}));

console.log(store.getState());

