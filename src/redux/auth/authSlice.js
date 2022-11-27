import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authOperations";

const handlePending = (state) => {
    state.isLoading = true
}
const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.error = payload
}

const authSlice = createSlice({
    name: "auth",
    initialState: {   
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [registerUser.pending]: handlePending,
        [registerUser.rejected]: handleRejected,
        [loginUser.pending]: handlePending,
        [loginUser.rejected]: handleRejected,
        [registerUser.fulfilled]: (_, { payload }) => {
            return {
                ...payload,
                isLoading: false,
                error: null,
            }
        },
        [loginUser.fulfilled]: (_, { payload }) => {
            return {
                ...payload,
                isLoading: false,
                error: null,
            }
        }
    }
})

export default authSlice.reducer