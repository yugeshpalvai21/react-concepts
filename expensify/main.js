import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const domElement = document.getElementById('app');

const Header = () => (
    <div>
        <h1>Main Title</h1>
        <p>main paragraph</p>
    </div>
)

const jsx = (
    <BrowserRouter>
        <Route path="/" component={Header} />
    </BrowserRouter>
);


ReactDOM.render(jsx, domElement);