import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {
        addContactPending: handlePending,
        addContactFullfield(state, action) {
            state.isLoading = false;
            state.error = null
            state.contacts.item.push(action.payload)
        },
        addContactRejected: handleRejected,

        getContactPending: handlePending,
        getContactFullfield(state, action) {
            state.isLoading = false;
            state.error = null
            state.contacts.item = action.payload
        },
        getContactRejected: handleRejected,

        removeContactPending: handlePending,
        removeContactFullfield(state, action) {
            state.isLoading = false;
            state.error = null
            state.contacts.item = state.contacts.item.filter(el => el.id !== action.payload)
        },
        removeContactRejected: handleRejected,
    }
});

export const {
    addContactPending,
    addContactFullfield,
    addContactRejected,
    getContactPending,
    getContactFullfield,
    getContactRejected, 
    removeContactPending,
    removeContactFullfield,
    removeContactRejected, 
} = contactsSlice.actions
export default contactsSlice.reducer;