import { Button } from 'components/Button'
import { paths } from 'core'

const FormFooter = () => {
    return (
        <>
            <Button text='Sign In' />

            <Button
                className='link'
                classText='link-body'
                link={paths.register}
                text='I have not an account'
            />
        </>
    )
}

export default FormFooter
    