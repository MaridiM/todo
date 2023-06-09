<<<<<<< HEAD
const Auth = () => {
    return <div>Auth Page</div>;
};
=======
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
>>>>>>> cedc32fede90170abcc23d69fd9561b127b5c57b

export default Auth;
