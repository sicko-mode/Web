import axios from 'axios';
import qs from 'qs';
const config = {
    headers: {'Content-type': 'application/x-www-form-urlencoded'}
}

export const login = (id, pw) =>{
	return axios.post('https://www.homedoctor.cf/auth/signIn', {
			headers: {'Content-type': 'application/x-www-form-urlencoded'},
      id: 'test',
      password: '1234'
	})
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


