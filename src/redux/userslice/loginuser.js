import { createSlice } from '@reduxjs/toolkit'
import { login } from '../action/user'
const loginuser = createSlice({
    name: "login user",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default loginuser.reducer