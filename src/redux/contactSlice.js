import { createSlice } from "@reduxjs/toolkit";

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
        addContactPending(state, action) {
            state.isLoading = true;  
        },
        addContactFullfield(state, action) {
            state.isLoading = false;
            state.contacts.item.push(action.payload)
        },
        addContactRejected(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        add: (state, action) => { return ([...state, action.payload]) },
        remove: (state, action) => { return state.filter(el => el.id !== action.payload)},
    }
});

export const {add, remove, addContactPending, addContactFullfield, addContactRejected} = contactsSlice.actions
export default contactsSlice.reducer;