import { FC, useEffect, useState } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"
import { Todo as ITodo } from "types"

interface Props {
    isAuth: () => void
}

const todosData: ITodo[] = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
        closed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
        closed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 5,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

const Todo: FC<Props> = ({ isAuth }) => {
    const [todos, setTodos] = useState<ITodo[]>([])

    /*
        TODO: Добавить addTodo 
            добавляет в масив todosData обьект с todo
    */

    useEffect(() => {
        // Set todos from database
        setTodos(todosData)
    }, [])

    /**
        Chacked a Todo 
    */
    const checkedTodo = (id: number): void => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                todo.closed = !todo.closed
            }
            return todo
        })
        setTodos(updated)
    }
    /**
     * Edit a Todo
     */
    const editTodo = (id: number, text: string): void => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                todo.text = text
            }
            return todo
        })

        setTodos(updated)
    }
    /**
     * Delete a Todo
     */
    const deleteTodo = (id: number): void => {
        const updated = todos.filter(todo => todo.id !== id && todo)
        setTodos(updated)
    }

    return (
        <div className='page'>
            <Header isAuth={isAuth} />

            <div className="todo">
                <AddTodo />
                <Todos 
                    todos={todos}
                    checkedTodo={checkedTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    )
}


export default Todo