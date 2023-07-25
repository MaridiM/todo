import { TodoItem } from 'components'
import { useSelector } from "react-redux"


const Todos = () => {
    
    const todosRedux = useSelector((state: any) => state.todosReducer.todos)

    return (
        <div className="todo-list">
            {
                todosRedux.map((item, index) => <TodoItem
                    key={index}
                    data={item}
                />)
            }


        </div>
    )
}

export default Todos