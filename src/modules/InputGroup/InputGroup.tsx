import { useLocation } from 'react-router-dom'
import LoginFields from './LoginFields'
import RegisterFields from './RegisterFields'

const InputGroup = ({ onChange }) => {

    const { pathname } = useLocation()

    return (
        <>
            {pathname === '/register' ? <RegisterFields onChange={onChange} /> : <LoginFields onChange={onChange} />}

        </>
    )
}

export default InputGroup
