// import { useEffect, useState } from 'react'
import { TodoItem } from 'components'
import { useSelector } from "react-redux"
import { fetchTodos } from 'redux/slices/todosSlice'
import { Todo } from 'types'
import { useAppDispatch } from 'redux/hooks'
import { useState, useEffect } from 'react'


const Todos = () => {
    
    const todos = useSelector((state: any) => state.todosReducer.todos)
    const categoryId = useSelector((state: any) => state.todosReducer.categoryId)
    const isDataLoaded = useSelector((state: any ) => state.todosReducer.isDataLoaded)
    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)

    const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]); 

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (!isDataLoaded && todos.length === 0) {
            dispatch(fetchTodos());
        }
        
        let filtered = [...todos];
        switch (categoryId) {
            case 0:
                setFilteredTodos(filtered);
                break;
            case 1:
                setFilteredTodos(filtered.filter(item => !item.closed));
                break;
            case 2:
                setFilteredTodos(filtered.filter(item => item.closed));
                break;
        } 
    }, [categoryId, dispatch, isDataLoaded, todos])  

    return (
        <div className="todo-list">
            {   
                todos
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