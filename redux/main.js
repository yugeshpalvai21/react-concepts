import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    return state;
});

console.log(store.getState());