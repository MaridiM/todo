import { FC } from 'react'
import { paths } from 'core'
import LoginFields from './LoginFields'
import RegisterFields from './RegisterFields'
import { useLocation } from 'react-router-dom'


interface Props {
    onChange: (e: any ) => void
}

const InputGroup: FC<Props> = ({ onChange }) => {
    const { pathname } = useLocation()
    return (
        <>
            {
                pathname === paths.register 
                    ? <RegisterFields onChange={onChange} />
                    : <LoginFields onChange={onChange} />
            }

        </>
    )
}

export default InputGroup
