import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// PRODUCTS REDUCERRR

const productsReducerDefaultData = [];

const AddProduct = ({title = "Not Defined", price = '00', created_at = "123"} = {}) => ({
    type: "ADD_PRODUCT",
    data: {
        id: uuid(),
        title,
        price,
        created_at
    }
})

const DeleteProduct = (id) => ({
    type: "DELETE_PRODUCT",
    id
})

const productsReducer = (state = productsReducerDefaultData,action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.data]
        case 'DELETE_PRODUCT':
            return state.filter((product) => { return (product.id != action.id) })
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


const unknown_product = store.dispatch(AddProduct());
store.dispatch(AddProduct({title: 'Some Product Name', price: '555'}));

store.dispatch(DeleteProduct(unknown_product.data.id));