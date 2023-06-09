import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import App from 'App'

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
=======
import 'assets/js/reset-transition'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
>>>>>>> cedc32fede90170abcc23d69fd9561b127b5c57b

root.render(<App />)

reportWebVitals()
