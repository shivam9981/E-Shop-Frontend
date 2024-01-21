import { createSlice } from '@reduxjs/toolkit'
import { cartDatacomplete } from '../action/data'
let initialState = {
    IsLoading: false,
    totalPrice: 0,
    totalQuantity: 0,
    count: 0,
    data: null,
    IsError: false
}

const cartdata = createSlice({
    name: "my  product cart data complete",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(cartDatacomplete.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(cartDatacomplete.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(cartDatacomplete.rejected, (state, action) => {
            state.IsError = true
        })
    }
})


export default cartdata.reducer