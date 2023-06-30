import { paths } from 'core'
import { Auth, Error404, Todo } from 'pages'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import 'styles/index.sass'



const App = () => {
    const [isAuth, setIsAuth] = useState(true)

    return (
        <div className="page">
            <Routes>
                {
                    !isAuth && <Route path={paths.main} element={<Auth isAuth={() => setIsAuth(true)} />}>
                        <Route path={paths.login} element={<Auth isAuth={() => setIsAuth(true)} />} />
                        <Route path={paths.register} element={<Auth isAuth={() => setIsAuth(true)} />} />
                    </Route>
                }
                {
                    isAuth && <Route path={paths.main} element={<Todo isAuth={() => setIsAuth(false)} />}>
                        <Route path={paths.todo} element={<Todo isAuth={() => setIsAuth(false)} />} />
                    </Route>
                }


                <Route path='*' element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default App
