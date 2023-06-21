import { Button } from "components/Button"
import { FC } from "react"


interface Props {}

const HeaderTitle: FC<Props> = () => {
    return (
        <header>
            <h1>TODO LIST</h1>
            <Button text='Logout' onClick={() => console.log("LOGOUT")} />
        </header>
    )
}

export default HeaderTitle