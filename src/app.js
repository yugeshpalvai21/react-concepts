import React from 'react';
import ReactDOM from 'react-dom';


const jsx = React.createElement('h1', null, 'Welcome Aborad, This Is React');

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);
