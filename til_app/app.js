import React from 'react';
import ReactDOM from 'react-dom';

import TilApp from './components/TilApp.js';

import './styles/styles.scss';

const domElement = document.getElementById('app');

ReactDOM.render(<TilApp />, domElement);
