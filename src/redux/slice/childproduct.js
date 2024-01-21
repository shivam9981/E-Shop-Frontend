import { createSlice } from '@reduxjs/toolkit'
import { productchilddata } from '../action/data'
const femaleproduct = createSlice({
    name: "my  product child data",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(productchilddata.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(productchilddata.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(productchilddata.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default femaleproduct.reducer