import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import store from './redux/store.js';

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
