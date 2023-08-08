import { Header, Todos } from "modules"
import { AddTodo } from "components"
import { Modal } from "modules/Modal"
import { useSelector } from "react-redux"



const Todo = () => {
    const isOpenModal = useSelector((state : any) => state.utilitiesReducer.isOpenModal)

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