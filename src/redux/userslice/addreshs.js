import { createSlice } from '@reduxjs/toolkit'
import { addreshss } from '../action/user'
const addreshs = createSlice({
    name: "addresh user",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(addreshss.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(addreshss.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(addreshss.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default addreshs.reducer