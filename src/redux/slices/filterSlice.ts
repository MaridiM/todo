import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   searchValue: '',
   categoryId: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action){
            state.searchValue = action.payload
        },
        setCategoryId(state, action) {
        state.categoryId = action.payload;
    },
    },
});

export const { setSearchValue, setCategoryId } = filterSlice.actions

export default filterSlice.reducer