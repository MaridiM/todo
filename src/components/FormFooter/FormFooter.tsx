import { Button } from 'components/Button'
import { useLocation } from 'react-router-dom'


const FormFooter = ({ text }) => {
    const currentUrl = useLocation()

    return (
        <>
            <Button text={text} />

            <Button
                className='link'
                classText='link-body'
                link={currentUrl.pathname}
                text={text}
            />
        </>
    )
}

export default FormFooter
