import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import 'assets/js/reset-transition'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
);

reportWebVitals()
