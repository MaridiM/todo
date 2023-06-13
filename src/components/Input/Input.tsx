import classNames from 'classnames'
import { ReactNode, HTMLInputTypeAttribute, FC } from 'react'

interface Props {
    args?: any
    id: string
    name?: string
    value?: string
    icon?: ReactNode
    button?: boolean
    disabled?: boolean
    className?: string
    buttonText?: string
    placeholder?: string
    disabledButton?: boolean
    onBlur?: (e: any) => void
    onClick?: (e: any) => void
    onFocus?: (e: any) => void
    autoComplete?: 'off' | 'on'
    onChange?: (e: any) => void
    type?: HTMLInputTypeAttribute
}

const Input: FC<Props> = ({ id, icon, className, autoComplete, type, name, placeholder, value, button, buttonText, onClick, disabled, disabledButton, onChange, ...args }) => {




    let fieldClasses = classNames(
        'input-field',
        icon && 'input-field-with-icon',
        button && 'input-field-with-btn',
    )

    disabledButton = disabled || disabledButton
    return (
        <div className='input'>
            {icon}
            <input
                onChange={onChange}
                id={id}
                className={fieldClasses}
                autoComplete={autoComplete}
                type={type}
                name={name ? name : id}
                placeholder={placeholder}
                disabled={disabled}
                {...args}
            />
            {
                button &&
                <button type='button' className='input-btn' disabled={disabledButton} onClick={onClick}>
                    <span className='btn-body'>{buttonText}</span>
                </button>
            }
        </div>
    )
}

Input.defaultProps = {
    name: '',
    type: 'text',
    button: false,
    className: '',
    disabled: false,
    disabledButton: false,
    icon: undefined,
    autoComplete: 'on',
    buttonText: 'Submit',
    placeholder: 'Input text',
}

export default Input