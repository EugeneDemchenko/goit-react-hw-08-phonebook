import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, getContactApi, removeContactApi } from "../utils/mockApi";

export const addContacts = createAsyncThunk("contacts/add", async (data, thunkApi) => {
    try {
        const contact = await addContactApi(data)
        return contact;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const fetchContacts = createAsyncThunk("contacts/fetch", async (_, thunkApi) => {
    try {
        const contact = await getContactApi()
        return contact;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const removeContacts = createAsyncThunk("contacts/remove", async (id, thunkApi) => {
    try {
        await removeContactApi(id)
        return id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})