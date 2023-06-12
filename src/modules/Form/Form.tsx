import { FormHeader, FormFooter } from "components"
import { InputGroup } from "modules/InputGroup"
import { useLocation } from "react-router-dom"


const Form = () => {
    const { pathname } = useLocation()

    return (
        <>
            <form className='form'>
                <FormHeader text={pathname === '/register' ? 'Sign Up' : 'Sign In'} />
                <InputGroup />
                <FormFooter text={pathname === '/register' ? 'Sign Up' : 'Sign In'} />
            </form>
        </>
    )
}

export default Form
