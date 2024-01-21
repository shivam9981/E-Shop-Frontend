import { createSlice } from '@reduxjs/toolkit'
import { signin } from '../action/user'
const adduser = createSlice({
    name: "add user",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(signin.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(signin.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(signin.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default adduser.reducer