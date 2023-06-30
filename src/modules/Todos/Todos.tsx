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
const Todos: FC<Props> = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    
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