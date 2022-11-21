import { addContactApi, getContactApi, removeContactApi } from "../utils/mockApi";
import { addContactPending, addContactFullfield, addContactRejected, getContactPending, getContactFullfield, getContactRejected, removeContactPending, removeContactFullfield, removeContactRejected } from "./contactSlice"

export const addContacts = (data) => (dispatch) => {
    dispatch(addContactPending());
    addContactApi(data)
        .then(contacts => dispatch(addContactFullfield(contacts)))
        .catch(err => dispatch(addContactRejected(err.message)))
}

export const fetchContacts = () => (dispatch) => {
    dispatch(getContactPending());
    getContactApi()
        .then(contacts => dispatch(getContactFullfield(contacts)))
        .catch(err => dispatch(getContactRejected(err.message)))
}

export const removeContacts = (id) => (dispatch) => {
    dispatch(removeContactPending());
    removeContactApi(id)
        .then(() => dispatch(removeContactFullfield(id)))
        .catch(err => dispatch(removeContactRejected(err.message)))
}