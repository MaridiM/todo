import { Input } from "components"


const LoginFields = ({ onChange }) => {
    return (
        <>
            <Input onChange={onChange} id='email'
                type='email'
                placeholder='E-Mail' />

            <Input onChange={onChange} id='password'
                type='password'
                autoComplete='off'
                placeholder='Password' />
        </>
    )
}

export default LoginFields
