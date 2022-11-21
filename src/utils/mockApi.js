import axios from "axios";

// https://637a2563702b9830b9e76f3a.mockapi.io/CDB/contacts

export const addContactApi = (form) => {
    return axios
        .post("https://637a2563702b9830b9e76f3a.mockapi.io/CDB/contacts", form)
        .then(res=>({...form, id: res.data.createdAt}))
} 