import { FormHeader, FormFooter } from "components"
import { paths } from "core"
import { useForm } from "hooks"
import { InputGroup } from "modules/InputGroup"
import { useLocation } from "react-router-dom"
import { FC } from 'react'

interface Props {
    isAuth: () => void
}



const Form: FC<Props> = ({ isAuth }) => {
    const { pathname } = useLocation()
    const { onChange, onClick } = useForm()

    return (
        <>
            <form className='form'>
                <FormHeader text={pathname === paths.register ? 'Sign Up' : 'Sign In'} />
                <InputGroup onChange={onChange} />
                <FormFooter onClick={() => { onClick(); isAuth() }} text={pathname === '/register' ? 'Sign Up' : 'Sign In'} />
            </form>
        </>
    )
}

export default Form
