import { Form } from 'modules'
import { FC } from 'react'

interface Props {
    isAuth: () => void
}

const Auth: FC<Props> = ({ isAuth }) => {
    return (
        <div className='auth'>
            <Form isAuth={isAuth} />
        </div>
    )
}

export default Auth
