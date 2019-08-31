import axios from 'axios';
  
export const login = (id, pw) => {
    let formData = new FormData();
    formData.append('id', 'test');
    formData.append('password', '1234');

    axios({
        method:'post',
        url:'/auth/signIn',
        headers: {'Content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'},
        body: {"id": "test", "password": "1234"}
    })
    .then(response => console.log(response));
    // return axios.post('https://www.homedoctor.cf/auth/signIn',{
    //     headers: {'Content-type': 'application/x-www-form-urlencoded'},
    //     formData})
    // .then(response => response.data)
    // .catch(error => {console.log(error)})
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