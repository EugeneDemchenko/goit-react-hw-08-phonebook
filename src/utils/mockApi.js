import axios from "axios";

// https://637a2563702b9830b9e76f3a.mockapi.io/CDB/contacts
axios.defaults.baseURL = "https://637a2563702b9830b9e76f3a.mockapi.io/CDB"

export const addContactApi = (form) => {
    return axios
        .post("/contacts", form)
        .then(res=>({...form, id: res.data.createdAt}))
} 

export const getContactApi = () => {
    return axios
        .get("/contacts")
        .then(res => res.data)
        // .then(data => console.log(data))
}