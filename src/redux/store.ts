import { configureStore } from '@reduxjs/toolkit';
import utilitiesReducer from './slices/utilitiesSlice'
import todosReducer from './slices/todosSlice'
import filterReducer from './slices/filterSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        utilitiesReducer,
        todosReducer,
        filterReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})