import { createStore, combineReducers } from 'redux';

// PRODUCTS REDUCERRR

const productsReducerDefaultData = [{id: '123', title: 'some product', price: '123', created_at: '123'}];

const productsReducer = (state = productsReducerDefaultData,action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, {id: '134', title: 'some other product', price: '345', created_at: '567'}]
        default: 
            return state;
    }
}

// FILTERS REDUCER

const filtersReducerDefaultData = {
    text: "",
    sort_by: "price",
    startDate: "123",
    endDate: "123"
}

const filtersReducer = (state = filtersReducerDefaultData, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// COMBINING REDUCERS

const store = createStore(combineReducers({products: productsReducer, filters: filtersReducer}));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'SOME_DEFAULT'});

store.dispatch({type: 'ADD_PRODUCT'});

store.dispatch({type: 'ADD_PRODUCT'});

