import { createSlice } from '@reduxjs/toolkit'
import { productfemaledata } from '../action/data'
const femaleproduct = createSlice({
    name: "my  product female data",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(productfemaledata.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(productfemaledata.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(productfemaledata.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default femaleproduct.reducer