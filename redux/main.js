import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        default:
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({type: 'something'});