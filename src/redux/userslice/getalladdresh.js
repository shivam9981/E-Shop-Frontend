import { createSlice } from '@reduxjs/toolkit'
import { getaddresh } from '../action/user'
const getalladdresh = createSlice({
    name: "addresh get user",
    initialState: {
        IsLoading: false,
        data: null,
        IsError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getaddresh.pending, (state, action) => {
            state.IsLoading = true
        })
        builder.addCase(getaddresh.fulfilled, (state, action) => {
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(getaddresh.rejected, (state, action) => {
            state.IsError = true
        })
    }
})

export default getalladdresh.reducer