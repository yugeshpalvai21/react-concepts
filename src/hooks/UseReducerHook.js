import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
      return { counter: state.counter + 1};
    case 'decrement': 
      return { counter: state.counter - 1};
    case 'reset':
      return { counter: 0 };
    default: 
      return state;
  }
};

export const UseReducerHook = () => {
  const initialState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h5>Counter: {state.counter}</h5>
      <button onClick={() => dispatch({ type: 'increment'})}>Add One</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>Minus One</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  );
}