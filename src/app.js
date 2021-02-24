import React from 'react';
import ReactDOM from 'react-dom';


//const jsx = React.createElement('h1', null, 'Welcome Aborad, This Is React');

const jsx = <h1>Welcome Aborad, This Is From React</h1>;
const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);
