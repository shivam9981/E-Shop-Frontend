import { createSlice } from '@reduxjs/toolkit'
import { contect } from '../action/user'
const usercontect = createSlice({
    name: "contect",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(contect.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(contect.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(contect.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default usercontect.reducer