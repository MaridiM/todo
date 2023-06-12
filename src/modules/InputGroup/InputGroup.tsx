import { useLocation } from 'react-router-dom'
import LoginFields from './LoginFields'
import RegisterFields from './RegisterFields'

const InputGroup = () => {

    const { pathname } = useLocation()

    return (
        <>
            {pathname === '/register' ? <RegisterFields /> : <LoginFields />}

        </>
    )
}

export default InputGroup
