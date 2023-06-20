import { paths } from 'core'
import { Auth, Todo } from 'pages'
import { Routes, Route, Link } from 'react-router-dom'
import 'styles/index.sass'

const App = () => {
    return (
        <div className="page">
            <Routes>
                <Route path={paths.main} element={<Auth />}>
                    <Route path={paths.login} element={<Auth />} />
                    <Route path={paths.register} element={<Auth />} />
                </Route>
                <Route path={paths.todo} element={<Todo />} />
                
                <Route path='*' element={
                    <>
                        <h1>Page not found 404!</h1>
                        <Link to={paths.main}>Go to main</Link>
                    </>
                } />
            </Routes>
        </div>
    )
}

export default App
