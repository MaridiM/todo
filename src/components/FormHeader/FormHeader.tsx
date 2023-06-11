import { FC } from 'react'

interface Props {
    text?: string
}

const FormHeader: FC<Props> = ({ text }) => {
    return (
        <header className='form-header'>
            <h3 className='form-title'>{text}</h3>
        </header>
    )
}

FormHeader.defaultProps = {
    text: 'Form Title'
}

export default FormHeader
