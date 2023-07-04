import { FC } from 'react'
import { TodoItem } from 'components'
import { Todo } from 'types'

interface Props {
    checkedTodo: (id: number) => void
    editTodo: (id: number, text: string) => void
    openModal: () => void
    setDeletedItem: (id: number) => void
    todos: Todo[]
}

const Todos: FC<Props> = ({ todos, checkedTodo, editTodo, openModal, setDeletedItem }) => {
    return (
        <div className="todo-list">
            {
                todos.map((item, index) => <TodoItem
                    key={index}
                    checkedTodo={checkedTodo}
                    editTodo={editTodo}

                    data={item}
                    openModal={openModal}
                    setDeletedItem={setDeletedItem}

                />)
            }


        </div>
    )
}

export default Todos