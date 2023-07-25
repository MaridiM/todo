import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deletedId: null,
    checkedId: null,
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosRedux(state, action){
            state.todos = action.payload;
        },

        setDeletedId(state, action){
            state.deletedId = action.payload
        },

        deleteTodoRedux(state, action){
            const id = action.payload
            const updated = state.todos.filter((todo: any) => todo.id !== id && todo)
            state.todos = updated;
        },

        checkedTodoRedux(state, action){
            const updated = state.todos.map((todo: any) => {
            if (todo.id === action.payload) {
                todo.closed = !todo.closed
            }
            return todo
        })
            state.todos = updated;
        },

        editTodoRedux(state, action){
        const updated = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                todo.text = action.payload.changedText
            }
            return todo
        })

        state.todos = updated;
    },

        addTodoRedux(state, action){

            console.log(action);

            state.todos = [{
                id: state.todos.length + 1,
                text: action.payload,
                closed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, ...state.todos];
    }
    },
});

export const { setDeletedId, setTodosRedux, deleteTodoRedux, checkedTodoRedux, editTodoRedux, addTodoRedux } = todosSlice.actions

export default todosSlice.reducer