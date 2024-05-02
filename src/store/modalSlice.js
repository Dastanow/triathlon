import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        isActive: false,
    },
    reducers: {
        toggleModal(state, action) {
            console.log(state)
            console.log(action)
            state.isActive = action.payload
        },
    },
})

export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer
