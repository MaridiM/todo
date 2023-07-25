import { configureStore } from '@reduxjs/toolkit';
import utilitiesReducer from './slices/utilitiesSlice'
import todosReducer from './slices/todosSlice'

export const store = configureStore({
    reducer: {
        utilitiesReducer,
        todosReducer 
    },
})