import { useEffect } from "react"
import { Header, Todos } from "modules"
import { AddTodo } from "components"
import { Modal } from "modules/Modal"
import { useSelector, useDispatch } from "react-redux"
import { setTodosRedux } from "redux/slices/todosSlice"



const Todo = () => {
    const isOpenModal = useSelector((state : any) => state.utilitiesReducer.isOpenModal)
    const todos = useSelector((state: any) => state.todosReducer.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTodosRedux(todos))
    }, [dispatch, todos])

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