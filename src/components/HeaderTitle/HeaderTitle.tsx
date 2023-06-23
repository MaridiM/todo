import { Button } from "components/Button"
import { FC } from "react"
import { Link } from "react-router-dom"


interface Props {
    isAuth: () => void
}

const HeaderTitle: FC<Props> = ({ isAuth }) => {
    return (
        <header>
            <h1>TODO LIST</h1>
            <Link to={'/login'}><Button text='Logout' onClick={isAuth} /></Link>
        </header>
    )
}

export default HeaderTitle