import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const defaultExpenses = [];

const defaultFilters = {
    text: 'text value',
    sortBy: 'amount/date',
    startDate: undefined,
    endDate: undefined
}

// Expenses Action Generators

const AddExpense = ( {text = 'default text', note = 'default note', price = 123 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        text,
        note,
        price,
        createdAt: 112233
    }
})

const expensesReducer = (state = defaultExpenses, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense ]
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


store.dispatch(AddExpense());
store.dispatch(AddExpense({text: 'some new value', note: 'detailed version', price: 4123}));