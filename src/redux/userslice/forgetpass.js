import { createSlice } from '@reduxjs/toolkit'
import { forget } from '../action/user'
const forgetuser = createSlice({
    name: "forget password",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(forget.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(forget.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(forget.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default forgetuser.reducer