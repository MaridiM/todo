import { FC, useEffect, useState } from 'react'
import { TodoItem } from 'components'

interface Props { }

interface Todo {
    id: number,
    text: string
    closed: boolean
    createdAt: Date
    updatedAt: Date    
}

const todosData = [
    {
        id: 1,
        text: '1',
        closed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        text: '2',
        closed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        text: '3',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        text: '4',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 5,
        text: '5',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]
const Todos: FC<Props> = () => {
    const [todos, setTodos] = useState<Todo[]>(todosData)
    
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
                todo.closed =!todo.closed
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