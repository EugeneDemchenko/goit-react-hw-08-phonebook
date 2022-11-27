import axios from "axios";


// https://connections-api.herokuapp.com - API base URL



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


// User
// POST /users​/signup Create a new user
// POST ​/users​/login Login user
// POST /users​/logout Log out user
// GET /users​/current Get information about the current user


export const registerUserApi = (userData) => {
    return axios
        .post("/users/signup", { ...userData })
        .then(({ data: {
            token,
            user: {
                name,
                email,
            }
        }})=> ({
            token,
            user: {
                name,
                email,
            },
        }))
}
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgzMThhOGQwNDMwZTAwMTZjYmQwOTIiLCJpYXQiOjE2Njk1MzU5MTJ9.GUlSLfLABiNN19jdlKgjq2arJ2ReLFKBZUM7fhlNFtM"
// user: {
//     name: "qscefb11",
//     email: "qscefb11@mail.com"
// }


export const loginUserApi = (userData) => {
    return axios
        .post("/users/signup", { ...userData, returnName: true })
        .then(({ data: {
            token,
            user: {
                password,
                email,
            }
        }})=> ({
            token,
            user: {
                password,
                email,
            },
        }))
}