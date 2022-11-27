import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "../../utils/mockApi";

export const registerUser = createAsyncThunk("auth/register", async (form, {rejectWithValue}) => {
    try {
        const data = await registerUserApi(form)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})