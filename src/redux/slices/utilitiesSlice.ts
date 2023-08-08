import { createSlice } from '@reduxjs/toolkit'

export interface UtilitiesState {
    isAuth: boolean;
    isOpenModal: boolean;
}

const initialState: UtilitiesState = {
    isAuth: true,
    isOpenModal: false,
}

export const utilitiesSlice = createSlice({
    name: 'utilities',
    initialState,
    reducers: {
        setAuth(state, action){
            state.isAuth = action.payload
        },
        setModal(state, action){
            state.isOpenModal = action.payload
        }
    },
});

export const { setAuth, setModal } = utilitiesSlice.actions

export default utilitiesSlice.reducer
