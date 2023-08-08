// import { useEffect, useState } from 'react'
import { TodoItem } from 'components'
import { useSelector, useDispatch } from "react-redux"


const Todos = () => {
    
    const todosRedux = useSelector((state: any) => state.todosReducer.todos)
    const categoryId = useSelector((state: any) => state.todosReducer.categoryId)
    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)


    const dispatch = useDispatch(); 

    return (
        <div className="todo-list">
            {   
                todosRedux
                .filter(todo => {if (categoryId === 'all') {
                    return true
                } else if (categoryId === false && !todo.closed) {
                    return true
                } else if (categoryId === true && todo.closed) {
                    return true
                }})
                .filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) => <TodoItem
                    key={index}
                    data={item}
                />)
            }


        </div>
    )
}

export default Todos