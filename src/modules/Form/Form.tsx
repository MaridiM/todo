import { FormHeader, FormFooter } from "components"
import useForm from "hooks/useForm"
import { InputGroup } from "modules/InputGroup"
import { useLocation } from "react-router-dom"



const Form = () => {
    const { pathname } = useLocation()
    const { onChange, onClick } = useForm()

    return (
        <>
            <form className='form'>
                <FormHeader text={pathname === '/register' ? 'Sign Up' : 'Sign In'} />
                <InputGroup onChange={onChange} />
                <FormFooter onClick={onClick} text={pathname === '/register' ? 'Sign Up' : 'Sign In'} />
            </form>
        </>
    )
}

export default Form
