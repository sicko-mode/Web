import axios from 'axios';
  
export const doctor =(category) => {
	return axios.get(`/patient/${category}`)
	.then(response => resolve(response.data))
	.catch(error => "asd")
}

export const patient = (id) => {
	return axios.get(`/checkup/${id}`)
	.then(response => response.data)
	.catch(error => {console.log(error)})
}

export const search = (data) => {
	return axios.post(`/prescription/`)
	.then(response => response.data)
	.catch(error => {console.log(error)})
}

export const getRoom = () => axios.get(`https://www.homedoctor.cf/room/`);
