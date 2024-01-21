import { createSlice } from '@reduxjs/toolkit'
import { cartDatadeleted } from '../action/data'
const cartDatadelete = createSlice({
    name: "my  product child data deleted",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(cartDatadeleted.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(cartDatadeleted.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(cartDatadeleted.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default cartDatadelete.reducer