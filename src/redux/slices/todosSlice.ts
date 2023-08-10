import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todosApi } from 'api';
import { Todo } from 'types';

export interface TodoState {
    todos: Todo[]
    isEmpty: boolean
    searchValue: string
    isDataLoaded: boolean
    filteredTodos: Todo[]
    deletedId: null | number
    categoryId: '' | 'closed=true' | 'closed=false'
}

const initialState: TodoState = {
    todos: [],
    filteredTodos: [],
    deletedId: null,
    searchValue: '',
    categoryId: '',
    isEmpty: false,
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

            // Search
            // const regex = new RegExp(`\\b${action.payload.toLowerCase()}\\b`);
            // state.filteredTodos = state.todos.filter(todo => {
            //     return regex.test(todo.text.toLowerCase()) ||
            //         todo.text.toLowerCase().includes(action.payload.toLowerCase())
            // })

            // Change isEmpty if serch input is not empty and filteredTodos Array is empty
            !state.filteredTodos.length && state.searchValue.length 
                ? (state.isEmpty = true)
                : (state.isEmpty = false)
        },
    },

    // Change fatching data into state object
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                // Add user to the state array
                state.todos = action.payload.reverse()
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
                
                if(state.categoryId) {
                    state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
                } else {
                    state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.closed = !todo.closed;
                    }
                    return todo;
                });
                }
            })

            .addCase(getTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.isDataLoaded = true
            })
    },
});


// fatching methods
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const data = await todosApi.fetchTodos()
    return data
});

export const addTodo = createAsyncThunk<Todo, string, {}>('todos/addTodo', async (text: string) => {
    const data = await todosApi.addTodo(text)
    return data
}
);

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, changedText }: { id: number; changedText: string }) => {
    const data = await todosApi.editTodo(id, changedText)
    return data
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
    const data = await todosApi.deleteTodo(id);
    return data
});

export const checkedTodo = createAsyncThunk('todos/checkedTodo', async (id: number) => {
    const data = await todosApi.checkedTodo(id);
    return data
});

export const getTodos = createAsyncThunk('todos/getTodos',async ({categoryId, searchValue }: {categoryId: string, searchValue: string}) => {
    const data = await todosApi.getTodos(categoryId, searchValue)
    return data
})


export const {
    setDeletedId,
    setCategoryId,
    setSearchValue
} = todosSlice.actions;

export default todosSlice.reducer
