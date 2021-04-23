import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter.js';

const domElement = document.getElementById('app');

ReactDOM.render(<AppRouter />, domElement);