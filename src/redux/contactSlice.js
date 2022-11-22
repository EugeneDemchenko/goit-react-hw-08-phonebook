import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, removeContacts } from "./contactOperation";

const handlePending = (state) => {
    state.isLoading = true
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            item: [],
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [addContacts.pending]: handlePending,
        [addContacts.rejected]: handleRejected,
        [addContacts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.contacts.item.push(action.payload)
        },       
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.contacts.item = action.payload
        },       
        [removeContacts.pending]: handlePending,
        [removeContacts.rejected]: handleRejected,
        [removeContacts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.contacts.item = state.contacts.item.filter(el => el.id !== action.payload)
        },       
    }
});

export default contactsSlice.reducer;