import { Button } from "components/Button"
import { FC } from "react"


interface Props {
    isAuth: () => void
}

const HeaderTitle: FC<Props> = ({ isAuth }) => {
    return (
        <header>
            <h1>TODO LIST</h1>
            <Button text='Logout' onClick={isAuth} />
        </header>
    )
}

export default HeaderTitle