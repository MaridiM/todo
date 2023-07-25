import { useEffect } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"
import { Todo as ITodo } from "types"
import { Modal } from "modules/Modal"
import { useSelector, useDispatch } from "react-redux"
import { setTodosRedux } from "redux/slices/todosSlice"


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


const Todo = () => {
    const isOpenModal = useSelector((state : any) => state.utilitiesReducer.isOpenModal)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTodosRedux(todosData))
    }, [dispatch])

    return (
        <div className='page'>
            <Header />

            <div className="todo">
                <AddTodo />
                <Todos />
                {
                    isOpenModal && <Modal />
                }
            </div>
        </div>
    )
}


export default Todo