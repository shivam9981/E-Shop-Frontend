import { createSlice } from '@reduxjs/toolkit'
import { rate } from '../action/data'
const ratting = createSlice({
    name: "rattings",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(rate.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(rate.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(rate.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default ratting.reducer