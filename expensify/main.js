import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from './store/configureStore.js';
import { jsx } from './components/AppRouter.js';

const store = configureStore();

const domElement = document.getElementById('app');
ReactDOM.render(jsx, domElement);




