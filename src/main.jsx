import React from 'react';
import ReactDOM from 'react-dom/client';
import '@app/styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from './providers/RouterProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Routing />
        </React.StrictMode>
    </BrowserRouter>
);

