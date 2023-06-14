import { FormHeader, FormFooter } from "components"
import { InputGroup } from "modules/InputGroup"
import { useLocation } from "react-router-dom"
import { useState } from 'react'


const Form = () => {
    const { pathname } = useLocation()
    const [form, setForm] = useState({})

    const onChange = (e: any) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onClick = () => {
        console.log(form)
    }



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
