import { createSlice } from '@reduxjs/toolkit'
import { productDataByID } from '../action/data'
const getdatabyID = createSlice({
    name: "my product data by  id",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(productDataByID.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(productDataByID.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(productDataByID.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default getdatabyID.reducer