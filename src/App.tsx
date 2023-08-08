import { paths } from 'core'
import { Auth, Error404, Todo } from 'pages'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/types'

import 'styles/index.sass'

const App = () => {
    const isAuthRedux = useSelector((state: RootState) => state.utilitiesReducer.isAuth);
    return (
        <div className='page'>
            <Routes>
                {!isAuthRedux && (
                    <Route path={paths.main} element={<Auth />}>
                        <Route path={paths.login} element={<Auth />} />
                        <Route path={paths.register} element={<Auth />} />
                    </Route>
                )}
                {isAuthRedux && (
                    <Route path={paths.main} element={<Todo />}>
                        <Route path={paths.todo} element={<Todo />} />
                    </Route>
                )}

                <Route path='*' element={<Error404 />} />
            </Routes>
        </div>
    );
};

export default App;
