// import { useEffect, useState } from 'react'
import { TodoItem } from 'components'
import { useSelector, useDispatch } from "react-redux"


const Todos = () => {
    
    const todosRedux = useSelector((state: any) => state.todosReducer.todos)
    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)
    //const categoryId = useSelector((state: any) => state.todosReducer.categoryId)


    const dispatch = useDispatch();

    // useEffect(() => {
    //      switch (categoryId) {
    //     case 0 : 
    //         setFilteredTodos(todosRedux);
    //         break;
    //     case 1: 
    //         setFilteredTodos(todosRedux.filter(item => item.closed === false));
    //         break;
    //     case 2:
    //         setFilteredTodos(todosRedux.filter(item => item.closed === true));
    // } 
    // }, [categoryId])  

    return (
        <div className="todo-list">
            {   
                todosRedux
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