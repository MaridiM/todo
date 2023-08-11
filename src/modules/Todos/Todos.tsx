import { Todo } from 'types'
import { TodoItem } from 'components'
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { fetchTodos, setCategoryId, getTodos } from 'redux/slices/todosSlice'


const Todos = () => {
    
    const dispatch = useAppDispatch();

    const { todos, isEmpty, categoryId, searchValue, isDataLoaded, filteredTodos } = useSelector((state: any) => state.todosReducer)

    // const [todoList, setTodoList] = useState<Todo[]>([]); 
    // const [isEmptyTodos, setIsEmptyTodos] = useState<boolean>(false); 
    
    useEffect(() => {
        const pathFilter = document.location.search.split('?')[1]
        pathFilter !== categoryId && dispatch(setCategoryId(pathFilter))
        dispatch(getTodos({categoryId, searchValue}));
      }, [dispatch, categoryId, searchValue])

    
    // useEffect(() => {
    //     // Get all todos
    //     if (!isDataLoaded && todos.length === 0) {
    //         dispatch(fetchTodos());
    //     }
        
    //     // Search Filtred
    //     if (searchValue.length || filteredTodos.length) {
    //         setTodoList(filteredTodos)
    //         console.log(filteredTodos)
    //     }
        
    //     // Filter Todo by path, and filter button
    //     if (!searchValue.length && !filteredTodos.length && todos.length) {
    //         const pathFilter = document.location.search.split('?')[1]
    //         pathFilter !== categoryId && dispatch(setCategoryId(pathFilter))
            
    //         const fTodos = todos.filter(todo => {
    //             return categoryId === 'all' 
    //                 ? true : categoryId === 'opened' && !todo.closed
    //                 ? true : categoryId === 'closed' && todo.closed
    //                 ? true : false
    //         })

    //         setTodoList(fTodos)
    //         console.log(fTodos);

    //         !fTodos.length ? setIsEmptyTodos(true) : setIsEmptyTodos(false) 
    //     }
    // }, [categoryId, dispatch, filteredTodos, isDataLoaded, searchValue, todos])  

    return (
        <div className="todo-list">
            {
                (!todos.length) && <span className='empty'>Nothing found</span>
            }
            {   
                todos.map((item, index) => (
                    <TodoItem
                        key={index}
                        data={item}
                    />
                ))
            }


        </div>
    )
}

export default Todos