import { FormHeader, FormFooter } from "components"
import { InputGroup } from "modules/InputGroup"

const Form = () => {
    return (
        <>
            <form className='form'>
                <FormHeader text='Sign In' />
                <InputGroup />
                <FormFooter />
            </form>
        </>
    )
}

export default Form
