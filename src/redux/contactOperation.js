import { addContactApi } from "../utils/mockApi";
import { addContactPending, addContactFullfield, addContactRejected } from "./contactSlice"

export const addContacts = (data) => (dispatch, getState) => {
    dispatch(addContactPending());
    addContactApi(data)
        .then(contacts => dispatch(addContactFullfield(contacts)))
        .catch(err => dispatch(addContactRejected(err.message)))
}