import axios from "axios";
import { nanoid } from "nanoid";


// https://connections-api.herokuapp.com - API base URL

// User
// POST /users​/signup Create a new user
// POST ​/users​/login Login user
// POST /users​/logout Log out user
// GET /users​/current Get information about the current user

// Contact
// GET /contacts Get all user contacts
// POST /contacts Create a new contact
// DELETE /contacts​/{contactId} Delete contact.
// PATCH /contacts​/{contactId} Update an existing contact



// axios.defaults.baseURL = "https://637a2563702b9830b9e76f3a.mockapi.io/CDB"
axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const addContactApi = (form) => {
    return axios
        .post("/contacts", form)
        .then(res=>({...form, id: nanoid()}))
} 

export const getContactApi = () => {
    return axios
        .get("/contacts")
        .then(res => res.data)
}

export const removeContactApi = (id) => {
    return axios
        .delete(`/contacts/${id}`)
}