import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi, loginUserApi } from "../../utils/mockApi";

export const registerUser = createAsyncThunk("auth/register", async (form, {rejectWithValue}) => {
    try {
        const data = await registerUserApi(form)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (form, {rejectWithValue}) => {
    try {
        const data = await loginUserApi(form)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})