import { Button } from 'components/Button'
import { paths } from 'core'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
    onClick: (e?: any) => void
}

const FormFooter: FC<Props> = ({ onClick }) => {
    const { pathname } = useLocation()

    return (
        <>
            <Button text={pathname === paths.register ? 'Sign Up' : 'Sign In'} onClick={onClick} />

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
