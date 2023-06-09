import { SearchSVG } from "assets/icons"
import classNames from "classnames"
import { ReactNode, HTMLInputTypeAttribute, FC } from "react"

interface Props {
    args?: any
    id: string
    name?: string
    value?: string
    noIcon?: boolean
    icon?: ReactNode
    button?: ReactNode
    className?: string
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoComplete?: 'off' | 'on'
    onChange?: (e: any) => void
    onBlur?: (e: any) => void
    onFocus?: (e: any) => void
}

const Input: FC<Props> = ({ id, icon, noIcon, className, autoComplete, type, name, placeholder, value, button, ...args }) => {
    let fieldClasses = classNames(
        'input-field',
    )
    return (
        <div className="input">
            {icon}
            <input
                id={id}
                className={fieldClasses}
                autoComplete={autoComplete}
                type={type}
                name={name ? name : id}
                placeholder={placeholder}
                {...args}
            />
            {button}
        </div>
    )
}

Input.defaultProps = {
    autoComplete: 'on',
    className: '',
    name: '',
    type: 'text',
    placeholder: 'Input text',
    icon: undefined,
    noIcon: true
}

export default Input