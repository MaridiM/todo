import { paths } from 'core'
import { Auth } from 'pages'
import { Routes, Route } from 'react-router-dom'
import 'styles/index.sass'

const App = () => {
    return (
        <div className="page">
            <Routes>
                <Route path={paths.login} element={<Auth />} />
                <Route path={paths.register} element={<Auth />} />
            </Routes>
            {/* <Auth /> */}
        </div>
    )
}

export default App
