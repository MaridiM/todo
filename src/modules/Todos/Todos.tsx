import { FC } from 'react'
import { TodoItem } from 'components'
import { Todo } from 'types'

interface Props {
    checkedTodo: (id: number) => void
    editTodo: (id: number, text: string) => void
    deleteTodo: (id: number) => void
    todos: Todo[]
}

const Todos: FC<Props> = ({ todos, checkedTodo, editTodo, deleteTodo }) => {
    return (
        <div className="todo-list">
            {
                todos.map((item, index) => <TodoItem 
                    key={index}
                    checkedTodo={checkedTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    data={item}
                />)
            }


        </div>
    )
}

export default Todos