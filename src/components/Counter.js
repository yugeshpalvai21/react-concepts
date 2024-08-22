import { useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h1 align="center">{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add One</button>
            <button onClick={() => setCounter(counter - 1)}>Minus One</button>
            <button onClick={() => setCounter(0)}>Reset Counter</button>
        </div>
    )
}
