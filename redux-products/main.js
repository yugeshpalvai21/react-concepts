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

const EditProduct = (id, new_data = {}) => ({
    type: 'EDIT_PRODUCT',
    id,
    new_data
})

const productsReducer = (state = productsReducerDefaultData,action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.data]
        case 'DELETE_PRODUCT':
            return state.filter((product) => { return (product.id != action.id) })
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if(product.id == action.id){
                    return {...product, ...action.new_data}
                }else{
                    return product
                }
            })
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

const AddText = (text) => ({
    type: 'ADD_TEXT',
    text
})

const SortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const SortByPrice = () => ({
    type: 'SORT_BY_PRICE'
})

const filtersReducer = (state = filtersReducerDefaultData, action) => {
    switch(action.type){
        case 'ADD_TEXT':
           return {...state, text: action.text }
        case 'SORT_BY_DATE':
            return {...state, sort_by: 'date'}
        case 'SORT_BY_PRICE':
            return {...state, sort_by: 'price'} 
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
const edited_product = store.dispatch(AddProduct({title: 'Some Product Name', price: '555'}));

store.dispatch(DeleteProduct(unknown_product.data.id));

store.dispatch(EditProduct(edited_product.data.id, {price: 'New Changed Price'}));
store.dispatch(EditProduct(edited_product.data.id));

store.dispatch(AddText('samsung'));

store.dispatch(SortByPrice());
store.dispatch(SortByDate());
