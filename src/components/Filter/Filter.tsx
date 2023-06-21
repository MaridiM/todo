import { paths } from "core"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {}

const Filter: FC<Props> = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to={paths.todoFilter('all')}>All</Link>
            </li>
            <li className="nav-item nav-item-acticve">
                <Link to={paths.todoFilter('opened')}>Opened</Link>
            </li>
            <li className="nav-item">
                <Link to={paths.todoFilter('closed')}>Closed</Link>
            </li>
        </ul>
    )
}

export default Filter