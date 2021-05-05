import React from 'react';
import ReactDOM from 'react-dom';

console.dir(React);
console.log(typeof ReactDOM);


const domElement = document.getElementById('app');

const jsx = (
    <div>
        <h1>Expensify App</h1>
        <p>Maintain Monthly Expenses</p>
    </div>
);


ReactDOM.render(jsx, domElement);