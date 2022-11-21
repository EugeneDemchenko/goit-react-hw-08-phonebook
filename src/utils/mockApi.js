import axios from "axios";

axios.defaults.baseURL = "https://637a2563702b9830b9e76f3a.mockapi.io/CDB"

export const addContactApi = (form) => {
    return axios
        .post("/contacts", form)
        .then(res=>({...form, id: res.data.id}))
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