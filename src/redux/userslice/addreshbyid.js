import { createSlice } from '@reduxjs/toolkit'
import { getaddreshbyid } from '../action/user'
const addreshbyid = createSlice({
    name: "addresh user by id",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getaddreshbyid.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(getaddreshbyid.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(getaddreshbyid.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default addreshbyid.reducer