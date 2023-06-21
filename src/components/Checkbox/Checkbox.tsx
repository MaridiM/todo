import { CheckSVG } from "assets/icons"
import { Dispatch, FC, SetStateAction } from "react"

interface Props {
    checked: boolean
    onClick: Dispatch<SetStateAction<boolean>>
}

const Checkbox: FC<Props> = ({ checked, onClick }) => {

    return (
        <div className="item-check" onClick={() => onClick(!checked)}>
            {
                checked && <CheckSVG className="item-check-icon" />
            }
        </div>
    )
}

export default Checkbox