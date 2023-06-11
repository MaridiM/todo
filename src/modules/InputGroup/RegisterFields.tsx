import { Input } from "components"


const RegisterFields = () => {
    return (
        <>  <Input id='full-name'
            type='text'
            placeholder='Full Name' />

            <Input id='email'
                type='email'
                placeholder='E-Mail' />

            <Input id='password'
                type='password'
                autoComplete='off'
                placeholder='Password' />

            <Input id='confirm-password'
                type='password'
                autoComplete='off'
                placeholder='Confirm Password' />
        </>
    )
}

export default RegisterFields