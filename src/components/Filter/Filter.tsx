import { paths } from "core"
import { FC } from "react"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"

import { setCategoryId } from "redux/slices/todosSlice"

interface Props {}

const Filter: FC<Props> = () => {

    const dispatch = useDispatch();

    return (
        <ul className="nav">
            <li onClick={() => dispatch(setCategoryId(0))} className="nav-item">
                <Link to={paths.todoFilter('all')}>All</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId(1))} className="nav-item nav-item-acticve">
                <Link to={paths.todoFilter('opened')}>Opened</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId(2))} className="nav-item">
                <Link to={paths.todoFilter('closed')}>Closed</Link>
            </li>
        </ul>
    )
}

export default Filter