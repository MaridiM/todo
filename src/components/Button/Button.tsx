import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text?: string
    className?: string
    classText?: string
    onClick?: (e: any) => void
    disabled?: boolean
    link?: string
    type?: 'button' | 'submit' | 'reset'
    children?: ReactNode
    icon?: ReactNode
}

const Button: FC<Props> = ({ text, className, classText, onClick, disabled, link, type, children, icon }) => {
    return (
        <>
            {
                link
                    ? <Link to={link} className={className}>
                        {icon || icon}
                        {
                            (text || children) && <span className={classText}>{text || children}</span>
                        }
                    </Link>
                    : <button type={type} disabled={disabled} onClick={onClick} className={className}>
                        {icon || icon}
                        {
                            (text || children) && <span className={classText}>{text || children}</span>
                        }
                    </button>
            }
        </>
    )
};

Button.defaultProps = {
    type: 'button',
    className: 'btn',
    classText: 'btn-body',
    disabled: false,
    link: '',
}

export default Button
