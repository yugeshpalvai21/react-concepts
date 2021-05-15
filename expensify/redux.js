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

const AddExpense = ( {description = 'default text', note = 'default note', price = 123 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        price,
        createdAt: 112233
    }
})

const RemoveExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const EditExpense = (id, updated_data ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updated_data
})

const expensesReducer = (state = defaultExpenses, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense ]
        case 'REMOVE_EXPENSE':
            return state.filter( ({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id) {
                    return { ...expense, ...action.updated_data }
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
}


const changeTextFilter = (search_data) => ({
    type: 'TEXT_FILTER',
    search_data
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})



const filtersReducer = ( state = defaultFilters, action ) => {
    switch(action.type) {
        case 'TEXT_FILTER':
            return { ...state, ...action.search_data }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy}
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.sortBy }
        default:
            return state;
    }
}


const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer }));


store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(AddExpense());
const lastExpense = store.dispatch(AddExpense({description: 'some new value', note: 'detailed version', price: 4123}));

// console.log(lastExpense.expense.id);

//store.dispatch(RemoveExpense(lastExpense.expense.id));

store.dispatch(EditExpense(lastExpense.expense.id, {description: 'yass, yasss... updated value'}));

store.dispatch(changeTextFilter({text: 'new search data'}));

store.dispatch(sortByDate());
store.dispatch(sortByAmount());