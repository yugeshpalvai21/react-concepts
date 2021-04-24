import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            return { count: state.count + 1}
        case 'REMOVE_COUNT':
            return { count: state.count - 1}
        case 'RESET_COUNT':
            return { count: 0}
        default:
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({type: 'ADD_COUNT'});
store.dispatch({type: 'ADD_COUNT'});
store.dispatch({type: 'REMOVE_COUNT'});
store.dispatch({type: 'RESET_COUNT'});