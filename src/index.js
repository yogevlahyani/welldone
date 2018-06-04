import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Configurations
import configureStore from './stores';
import { routes } from './routes';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App routes={ routes } />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
