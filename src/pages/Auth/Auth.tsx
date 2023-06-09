import { Input } from 'components'

const Auth = () => {
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
                    <Input
                        id='password'
                        type='password'
                        autoComplete='off'
                        placeholder='Password'
                    />
                </div>
                
                <button type='button' className='btn'>
                    <span className='btn-body'>Sign In</span>
                </button>
                <a className='link' href='/register.html'>
                    <span className='link-body'>I have not an account</span>
                </a>
            </form>
        </div>
    )

}

export default Auth