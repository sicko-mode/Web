import axios from 'axios';
  
export const login = (id, pw) => {
    return axios.post('https://www.homedoctor.cf/auth', {
        params: {
            id: id,
            password: pw
        }
    })
    .then(response => response.data)
    .catch(error => {console.log(error)})
}

export const register = (id, pw, email) =>{
    return axios.post('https://www.homedoctor.cf/auth', {
        params: {
            id: id,
            password: pw,
            email: email
        }
    })
    .then(response => response)
    .catch(error => error)
}