import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        add: (state, action) => { return ([...state, action.payload]) },
        remove: (state, action) => { return state.filter(el => el.id !== action.payload)},
    }
});

export const {add, remove} = contactsSlice.actions
export default contactsSlice.reducer;