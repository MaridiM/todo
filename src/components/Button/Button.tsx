import { FC } from 'react'
import { Link } from 'react-router-dom'

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
    return (
        <>
            {
                link
                    ? <Link to={link} className={className}>
                        <span className={classText}>{text}</span>
                    </Link>
                    : <Link to={'/todo'}><button type={type} disabled={disabled} onClick={onClick} className={className}>
                        <span className={classText}>{text}</span>
                    </button>
                    </Link>
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
