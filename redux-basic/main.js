import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1
            return { count: state.count + incrementBy }
        case 'REMOVE_COUNT':
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1
            return { count: state.count - decrementBy}
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
store.dispatch({type: 'ADD_COUNT', incrementBy: 'some variable'});
store.dispatch({type: 'ADD_COUNT', incrementBy: 10});
store.dispatch({type: 'REMOVE_COUNT'});
store.dispatch({type: 'REMOVE_COUNT', decrementBy: 100});
store.dispatch({type: 'RESET_COUNT'});