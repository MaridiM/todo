import { FC } from 'react'

interface Props {
    text?: string,
    className?: string,
    classText?: string,
}

const Button: FC<Props> = ({ text, className, classText }) => {
    return <>
        <button className={className}>
            <span className={classText}>{text}</span>
        </button>
    </>
};

Button.defaultProps = {
    text: 'Submit',
    className: 'btn',
    classText: '',
}

export default Button
