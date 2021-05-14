import { createStore } from 'redux';



const AddCounter = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'ADD_ONE',
        incrementBy
    }
}

const MinusCounter = ({ decrementBy = 1 } = {}) => ( {
    type: 'MINUS_ONE',
    decrementBy
})

const store = createStore((state = {counter: 0}, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return { counter: state.counter + action.incrementBy }
        case 'MINUS_ONE':
            return { counter: state.counter - action.decrementBy }
        default: 
            return state    
    }
})

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(AddCounter());
store.dispatch(AddCounter({incrementBy: 500}));
// store.dispatch({type: "ADD_COUNTER"});

store.dispatch(MinusCounter());

store.dispatch(MinusCounter({ decrementBy: 101 }));