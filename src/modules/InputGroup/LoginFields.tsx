import { Input } from "components"


const LoginFields = () => {
    return (
        <>
            <Input id='email'
                type='email'
                placeholder='E-Mail' />

            <Input id='password'
                type='password'
                autoComplete='off'
                placeholder='Password' />
        </>
    )
}

export default LoginFields
