import { createStore, combineReducers } from 'redux';

const defaultExpenses = [{
    id: '12345',
    description: 'some description of expense',
    note: 'detailed explanation of expense',
    amount: 1212,
    createdAt: 1234
}];

const defaultFilters = {
    text: 'text value',
    sortBy: 'amount/date',
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = defaultExpenses, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

const filtersReducer = ( state = defaultFilters, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}


const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer }));


store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({type: 'something'});