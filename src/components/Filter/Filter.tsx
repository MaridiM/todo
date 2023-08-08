import { paths } from "core"
import { FC } from "react"
import { Link } from "react-router-dom"

import { setCategoryId } from "redux/slices/todosSlice"

import { useDispatch } from "react-redux"

interface Props {}

const Filter: FC<Props> = () => {

    const dispatch = useDispatch();

    return (
        <ul className="nav">
            <li onClick={() => dispatch(setCategoryId('all'))} className="nav-item">
                <Link to={paths.todoFilter('all')}>All</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId(false))} className="nav-item nav-item-acticve">
                <Link to={paths.todoFilter('opened')}>Opened</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId(true))} className="nav-item">
                <Link to={paths.todoFilter('closed')}>Closed</Link>
            </li>
        </ul>
    )
}

export default Filter