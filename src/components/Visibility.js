import { useState } from 'react';

export const Visibility = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <h1>Visibility App</h1>
            <button onClick={() => setVisible(!visible)}>{ visible ? 'Hide Details' : 'Show Details' }</button>
            { visible && <p>this paragraph is showing because you want to see</p> }
        </div>
    );    
}