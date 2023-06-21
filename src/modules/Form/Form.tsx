import { FormHeader, FormFooter } from "components"
import { paths } from "core"
import { useForm } from "hooks"
import { InputGroup } from "modules/InputGroup"
import { useLocation } from "react-router-dom"



const Form = () => {
    const { pathname } = useLocation()
    const { onChange, onClick } = useForm()

    return (
        <>
            <form className='form'>
                <FormHeader text={pathname === paths.register ? 'Sign Up' : 'Sign In'} />
                <InputGroup onChange={onChange} />
                <FormFooter onClick={onClick} />
            </form>
        </>
    )
}

export default Form
