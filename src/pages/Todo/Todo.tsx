import { FC } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"

interface Props {
    isAuth: () => void
}

const Todo: FC<Props> = ({ isAuth }) => {
    return (
        <div className='page'>
            <Header isAuth={isAuth} />

            <div className="todo">
                <AddTodo />
                <Todos />
            </div>
        </div>
    )
}


export default Todo