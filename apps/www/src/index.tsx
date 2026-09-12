import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
