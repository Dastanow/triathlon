import ReactDOM from 'react-dom/client'
import '@app/styles/style.scss'
import { BrowserRouter } from 'react-router-dom'
import Routing from './providers/RouterProvider.jsx'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import i18n from './i18n'
import store from './store/index.js'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routing />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </I18nextProvider>,
)
