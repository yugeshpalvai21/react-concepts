
import { getVisibleExpenses } from './selectors/visibleExpenses.js';

import { configureStore } from './store/configureStore.js';

const store = configureStore();


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

// store.dispatch(AddExpense());
// store.dispatch(setStartDate(123))