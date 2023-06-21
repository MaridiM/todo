import { FormHeader, FormFooter } from "components"
import { paths } from "core"
import { useForm } from "hooks"
import { InputGroup } from "modules"
import { FC } from "react"
import { useLocation } from "react-router-dom"


interface Props {}

const Form: FC<Props> = () => {
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
