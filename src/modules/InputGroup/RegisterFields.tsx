import { Input } from "components"


const RegisterFields = ({ onChange }) => {
    return (
        <>
            <Input onChange={onChange} id='full-name'
                type='text'
                placeholder='Full Name' />

            <Input onChange={onChange} id='email'
                type='email'
                placeholder='E-Mail' />

            <Input onChange={onChange} id='password'
                type='password'
                autoComplete='off'
                placeholder='Password' />

            <Input onChange={onChange} id='confirm-password'
                type='password'
                autoComplete='off'
                placeholder='Confirm Password' />
        </>
    )
}

export default RegisterFields