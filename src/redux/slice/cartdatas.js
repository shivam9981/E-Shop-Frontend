import { createSlice } from '@reduxjs/toolkit'
import { cartData } from '../action/data'
const cartdatas = createSlice({
    name: "my  product cart data in db",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(cartData.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(cartData.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(cartData.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default cartdatas.reducer