import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const defaultExpenses = [];

const defaultFilters = {
    text: 'default',
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

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



const filtersReducer = ( state = defaultFilters, action ) => {
    switch(action.type) {
        case 'TEXT_FILTER':
            return { ...state, ...action.search_data }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy}
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.sortBy }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
}


const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer }));


const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const startDateMatch = expense.createdAt >= filters.startDate;
        const textMatch = expense.description.includes(filters.text);

        return startDateMatch && textMatch
    })
}


store.subscribe(() => {
    const result_state = store.getState();
    const final_data = getVisibleExpenses(result_state.expenses, result_state.filters);
    console.log(final_data);
});


// store.dispatch(AddExpense());
// const lastExpense = store.dispatch(AddExpense({description: 'some new value', note: 'detailed version', price: 4123}));

// // console.log(lastExpense.expense.id);

// //store.dispatch(RemoveExpense(lastExpense.expense.id));

// store.dispatch(EditExpense(lastExpense.expense.id, {description: 'yass, yasss... updated value'}));

// store.dispatch(changeTextFilter({text: 'default'}));

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(1234));
// // store.dispatch(setEndDate(4321));

store.dispatch(AddExpense());
store.dispatch(setStartDate(123))