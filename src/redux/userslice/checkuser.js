import { createSlice } from '@reduxjs/toolkit'
import { checkdata } from '../action/user'
const checkuser = createSlice({
    name: "check user",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(checkdata.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(checkdata.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(checkdata.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default checkuser.reducer