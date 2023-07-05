import { FC, useEffect, useState } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"
import { Todo as ITodo } from "types"
import { Modal } from "modules/Modal"

interface Props {
    isAuth: () => void
}

const todosData: ITodo[] = [
    {
        id: 1,
        text: 'Dorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
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
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [deletedId, setDeletedId] = useState(null)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    useEffect(() => {
        setTodos(todosData)
    }, [])


    const checkedTodo = (id: number): void => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                todo.closed = !todo.closed
            }
            return todo
        })
        setTodos(updated)
    }

    const editTodo = (id: number, text: string): void => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                todo.text = text
            }
            return todo
        })

        setTodos(updated)
    }

    const deleteTodo = (id: number): void => {
        const updated = todos.filter(todo => todo.id !== id && todo)
        setTodos(updated)
    }

    const addTodo = (text: string) => {

        setTodos([{
            id: todos.length + 1,
            text,
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, ...todos]);

        console.log(todos);
    }

    return (
        <div className='page'>
            <Header isAuth={isAuth} />

            <div className="todo">
                <AddTodo addTodo={addTodo} />
                <Todos
                    todos={todos}
                    checkedTodo={checkedTodo}
                    editTodo={editTodo}
                    openModal={openModal}
                    setDeletedItem={setDeletedId}
                />
                {
                    isOpenModal && <Modal
                        close={closeModal}
                        active={isOpenModal}
                        confirmDelete={() => deleteTodo(deletedId)}
                        id={deletedId} 
                    />
                }
            </div>
        </div>
    )
}


export default Todo