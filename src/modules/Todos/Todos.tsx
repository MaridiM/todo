import { useEffect, useState } from 'react'
import { TodoItem } from 'components'
import { useSelector, useDispatch } from "react-redux"

import { setTodosRedux } from 'redux/slices/todosSlice'


const Todos = () => {
    
    const todosRedux = useSelector((state: any) => state.todosReducer.todos)
    const searchValue = useSelector((state : any) => state.filterReducer.searchValue)
    const categoryId = useSelector((state: any) => state.filterReducer.categoryId)

    const [filteredTodos, setFilteredTodos] = useState([]);

    console.log('Category', categoryId, searchValue);

    const dispatch = useDispatch();

    useEffect(() => {
         switch (categoryId) {
        case 0 : 
            setFilteredTodos(todosRedux);
            break;
        case 1: 
            setFilteredTodos(todosRedux.filter(item => item.closed === false));
            break;
        case 2:
            setFilteredTodos(todosRedux.filter(item => item.closed === true));
    } 
    }, [categoryId])  

    return (
        <div className="todo-list">
            {   
                filteredTodos.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => <TodoItem
                    key={index}
                    data={item}
                />)
            }


        </div>
    )
}

export default Todos