import { FC } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"

interface Props {}

const Todo: FC<Props> = () => {
    return (
        <div className='page'>
            <Header />

            <div className="todo">
                <AddTodo />

                <Todos />
            </div>
        </div>
    )
}


export default Todo