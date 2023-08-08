import { Todo } from 'types'
import { TodoItem } from 'components'
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { fetchTodos, setCategoryId } from 'redux/slices/todosSlice'


const Todos = () => {
    
    const dispatch = useAppDispatch();

    const todos = useSelector((state: any) => state.todosReducer.todos)
    const isEmpty = useSelector((state: any) => state.todosReducer.isEmpty)
    const categoryId = useSelector((state: any) => state.todosReducer.categoryId)
    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)
    const isDataLoaded = useSelector((state: any) => state.todosReducer.isDataLoaded)
    const filteredTodos = useSelector((state: any) => state.todosReducer.filteredTodos)

    const [todoList, setTodoList] = useState<Todo[]>([]); 
    const [isEmptyTodos, setIsEmptyTodos] = useState<boolean>(false); 

    
    useEffect(() => {
        // Get all todos
        if (!isDataLoaded && todos.length === 0) {
            dispatch(fetchTodos());
        }
        
        // Search Filtred
        if (searchValue.length || filteredTodos.length) {
            setTodoList(filteredTodos)
        }
        
        // Filter Todo by path, and filter button
        if (!searchValue.length && !filteredTodos.length && todos.length) {
            const pathFilter = document.location.search.split('?')[1]
            pathFilter !== categoryId && dispatch(setCategoryId(pathFilter))
            
            const fTodos = todos.filter(todo => {
                return categoryId === 'all' 
                    ? true : categoryId === 'opened' && !todo.closed
                    ? true : categoryId === 'closed' && todo.closed
                    ? true : false
            })
            setTodoList(fTodos)
            
            !fTodos.length ? setIsEmptyTodos(true) : setIsEmptyTodos(false) 
        }
    }, [categoryId, dispatch, filteredTodos, isDataLoaded, searchValue, todos])  

    return (
        <div className="todo-list">
            {
                (isEmpty || isEmptyTodos) && <span className='empty'>Nothing found</span>
            }
            {   
                todoList.map((item, index) => (
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