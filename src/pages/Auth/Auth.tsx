import { FormFooter, FormHeader, Input } from 'components'
import { paths } from 'core';

const Auth = () => {
    console.log(paths.register)
    return (
        <div className='auth'>
            <form className='form'>
                <FormHeader text='Sign In' />

                <div className='input-group'>
                    <Input
                        id='email'
                        type='email'
                        placeholder='E-Mail'
                    />
                    <Input
                        id='password'
                        type='password'
                        autoComplete='off'
                        placeholder='Password'
                    />
                </div>

                <FormFooter />
                
            </form>
        </div>
    )

}


export default Auth;
