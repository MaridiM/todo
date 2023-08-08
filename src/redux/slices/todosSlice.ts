import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todosApi } from 'api';
import { Todo } from 'types';

export interface TodoState {
    todos: Todo[]
    deletedId: null | number
    searchValue: string
    categoryId: 'all' | 'closed' | 'opened'
    isDataLoaded: boolean
}

const initialState: TodoState = {
    todos: [],
    deletedId: null,
    searchValue: '',
    categoryId: 'all',
    isDataLoaded: false,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setDeletedId(state, action) {
            state.deletedId = action.payload
        },

        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        
        setSearchValue(state, action) {
            state.searchValue = action.payload
            let searchResult
            if (state.searchValue !== '') {
                searchResult = state.todos.filter(todo => todo.text.toLowerCase().includes(state.searchValue.toLowerCase()));
                state.todos = searchResult
            } 
        },
    },

    // Change fatching data into state object
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                // Add user to the state array
                state.todos = action.payload
                state.isDataLoaded = true
            })

            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })

            .addCase(editTodo.fulfilled, (state, action) => {
                const edited = action.payload
                state.todos = state.todos.map(todo =>
                    todo.id === edited.id ? { ...todo, ...edited } : todo
                );
            })
            
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const id = action.meta.arg;
                state.todos = state.todos.filter(todo => todo.id !== id);
                state.deletedId = null;
            })
            
            .addCase(checkedTodo.fulfilled, (state, action) => {
                state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.closed = !todo.closed;
                    }
                    return todo;
                });
            })
    },
});

// fatching methods
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const data = await todosApi.fetchTodos();
    return data;
});

export const addTodo = createAsyncThunk<Todo, string, {}>('todos/addTodo', async (text: string) => {
    const data = await todosApi.addTodo(text);
        return data;
    }
);

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, changedText }: { id: number; changedText: string }) => {
    const data = await todosApi.editTodo(id, changedText);
    return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
    const data = await todosApi.deleteTodo(id);
    return data;
});

export const checkedTodo = createAsyncThunk('todos/checkedTodo', async (id: number) => {
    const data = await todosApi.checkedTodo(id);
    return data;
});


export const {
    setDeletedId,
    setCategoryId,
    setSearchValue
    // checkedTodoRedux,
    // setTodosRedux,
    // deleteTodoRedux,
    // editTodoRedux,
    // addTodoRedux,
} =
    todosSlice.actions;

export default todosSlice.reducer
