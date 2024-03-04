import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import store from './redux/store';

// Provider allows use of redux within react'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
