import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        add: (_, action) => action.payload
    }
});

export const { add } = filterSlice.actions;
export  default filterSlice.reducer;