import { CheckSVG } from "assets/icons"
import { FC } from "react"


interface Props {
    checked: boolean
    checkedTodo: () => void
}

const Checkbox: FC<Props> = ({ checked, checkedTodo }) => {

    return (
        <div className="item-check" onClick={() => checkedTodo()}>
            {
                checked && <CheckSVG className="item-check-icon" />
            }
        </div>
    )
}

export default Checkbox