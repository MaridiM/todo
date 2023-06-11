import { Button, Input } from 'components'
import { paths } from 'core';

const Auth = () => {
    console.log(paths.register)
    return (
        <div className='auth'>
            <form className='form'>
                <header className='form-header'>
                    <h3 className='form-title'>Sign In</h3>
                </header>

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

                <Button text='Sign In' />
                
                <Button 
                    className='link'
                    classText='link-body'
                    link={paths.register}
                    text='I have not an account'
                />
            </form>
        </div>
    )

}


export default Auth;
