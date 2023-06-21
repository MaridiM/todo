import { paths } from 'core'
import { Auth, Todo } from 'pages'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import 'styles/index.sass'



const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    console.log(isAuth);

    return (
        <div className="page">
            <Routes>
                {!isAuth && <Route path={paths.main} element={<Auth isAuth={() => setIsAuth(true)} />}>
                    <Route path={paths.login} element={<Auth isAuth={() => setIsAuth(true)} />} />
                    <Route path={paths.register} element={<Auth isAuth={() => setIsAuth(true)} />} />
                </Route>}
                {isAuth && <Route path={paths.todo} element={<Todo isAuth={() => setIsAuth(false)} />} />}


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
