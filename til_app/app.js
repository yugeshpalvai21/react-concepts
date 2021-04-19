import React from 'react';
import ReactDOM from 'react-dom';

const jsx = (
    <div>
        <h1>THis is JSX from APP.JS</h1>
        <p>This is Paragraph</p>
        <p>This is new para after configuring babel with webpack....</p>
    </div>
);

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);