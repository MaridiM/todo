import { Button } from 'components/Button'
import { paths } from 'core'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from 'redux/slices/utilitiesSlice'

interface Props {
    onClick: (e?: any) => void,
}

const FormFooter: FC<Props> = ({ onClick }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation()

    return (
        <>
            <Link to={'/todo'}><Button text={pathname === paths.register ? 'Sign Up' : 'Sign In'} onClick={() => {onClick(); dispatch(setAuth(true)) }} /></Link>

            <Button
                className='link'
                classText='link-body'
                link={pathname === paths.register ? paths.login : paths.register}
                text={pathname === paths.register ? 'I already have an account' : 'I have not an account'}
            />
        </>
    )
}

export default FormFooter
