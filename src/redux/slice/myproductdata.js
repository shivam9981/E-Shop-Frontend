import { createSlice } from '@reduxjs/toolkit'
import { productmaledata } from '../action/data'
const myproductdata = createSlice({
    name: "my  product male data",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(productmaledata.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(productmaledata.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(productmaledata.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default myproductdata.reducer