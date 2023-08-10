// import { paths } from "core"
// import { FC, useState } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { setCategoryId } from "redux/slices/todosSlice"

// interface Props {}

// const Filter: FC<Props> = () => {
//     const dispatch = useDispatch()
//     const location = useLocation()
//     const [filters] = useState<string[]>(['all', 'opened', 'closed'])
    
//     const search = location.search.split('?')[1]

//     return (
//         <ul className="nav">
//             {
//                 filters.map((f, i) => (
//                     <li
//                         key={i}
//                         onClick={() => dispatch(setCategoryId(f))}
//                         className={`nav-item ${search === f && 'nav-item-acticve'}`}
//                     >
//                         <Link to={paths.todoFilter(f)}>{f[0].toUpperCase() + f.slice(1)}</Link>
//                     </li>
//                 ))
//             }
//         </ul>
//     )
// }

// export default Filter

import { paths } from "core"
import { FC, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCategoryId } from "redux/slices/todosSlice"

interface Props {}

const Filter: FC<Props> = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [filters] = useState<string[]>(['all', 'opened', 'closed'])
    
    const search = location.search.split('?')[1]

    return (
        <ul className="nav">
            <li onClick={() => dispatch(setCategoryId(''))} className="nav-item">
                <Link to={paths.todoFilter('all')}>All</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId('closed=false'))} className="nav-item nav-item-acticve">
                <Link to={paths.todoFilter('opened')}>Opened</Link>
            </li>
            <li onClick={() => dispatch(setCategoryId('closed=true'))} className="nav-item">
                <Link to={paths.todoFilter('closed')}>Closed</Link>
            </li>
        </ul>
    )
}

export default Filter