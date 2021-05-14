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

const RemoveExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const expensesReducer = (state = defaultExpenses, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense ]
        case 'REMOVE_EXPENSE':
            return state.filter( ({ id }) => id !== action.id );
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
const lastExpense = store.dispatch(AddExpense({text: 'some new value', note: 'detailed version', price: 4123}));

// console.log(lastExpense.expense.id);

store.dispatch(RemoveExpense(lastExpense.expense.id));