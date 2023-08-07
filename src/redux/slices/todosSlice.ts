import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    deletedId: null,
    checkedId: null,
    todos: [
        {
            id: 1,
            text: 'Dorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
            closed: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
            closed: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
    searchValue: '',
    categoryId: 0,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosRedux(state, action) {
            state.todos = action.payload
        },

        setDeletedId(state, action) {
            state.deletedId = action.payload
        },

        deleteTodoRedux(state, action) {
            const id = action.payload;
            const updated = state.todos.filter((todo: any) => todo.id !== id && todo)
            state.todos = updated;
        },

        checkedTodoRedux(state, action) {
            const updated = state.todos.map((todo: any) => {
                if (todo.id === action.payload) {
                    todo.closed = !todo.closed;
                }
                return todo;
            });
            state.todos = updated;
        },

        editTodoRedux(state, action) {
            const updated = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.changedText
                }
                return todo;
            });

            state.todos = updated;
        },

        addTodoRedux(state, action) {
            console.log(action);

            state.todos = [
                {
                    id: state.todos.length + 1,
                    text: action.payload,
                    closed: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                ...state.todos,
            ];
        },

        setSearchValue(state, action) {
            state.searchValue = action.payload

        },
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
    },
});

export const { setDeletedId, setTodosRedux, deleteTodoRedux, checkedTodoRedux, editTodoRedux, addTodoRedux, setSearchValue, setCategoryId } =
    todosSlice.actions

export default todosSlice.reducer
