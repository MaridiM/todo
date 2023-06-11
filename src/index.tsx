import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'App'

import 'assets/js/reset-transition'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)

reportWebVitals()
