import { createSlice } from '@reduxjs/toolkit'
import { getrate } from '../action/data'
const rattinggets = createSlice({
    name: "rattings get",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getrate.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(getrate.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(getrate.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default rattinggets.reducer