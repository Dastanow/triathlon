import React from 'react'
import ReactDOM from 'react-dom/client'
import '@app/styles/style.scss'
import { BrowserRouter } from 'react-router-dom'
import Routing from './providers/RouterProvider.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <React.StrictMode>
                <Routing />
            </React.StrictMode>
        </BrowserRouter>
    </I18nextProvider>,
)
