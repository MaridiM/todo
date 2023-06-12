import { paths } from 'core'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
    text?: string
    className?: string
    classText?: string
    onClick?: (e: any) => void
    disabled?: boolean
    link?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button: FC<Props> = ({ text, className, classText, onClick, disabled, link, type }) => {
    const { pathname } = useLocation()

    return (
        <>
            {
                link
                    ? <Link to={link === '/register' ? paths.login : paths.register} className={className}>
                        <span className={classText}>{pathname === '/register' ? 'I already have an account' : 'I have not an account'}</span>
                    </Link>
                    : <button type={type} disabled={disabled} onClick={onClick} className={className}>
                        <span className={classText}>{text}</span>
                    </button>
            }
        </>
    )
};

Button.defaultProps = {
    text: 'Submit',
    type: 'button',
    className: 'btn',
    classText: 'btn-body',
    disabled: false,
    link: '',
}

export default Button
