import { FC } from 'react'

interface Props {
    text?: string,
    className?: string,
    classText?: string,
    onClick: (e: any) => void,
    disabled: boolean
}

const Button: FC<Props> = ({ text, className, classText, onClick, disabled }) => {
    return <>
        <button disabled={disabled} onClick={onClick} className={className}>
            <span className={classText}>{text}</span>
        </button>
    </>
};

Button.defaultProps = {
    text: 'Submit',
    className: 'btn',
    classText: 'btn-body',
    disabled: true
}

export default Button
