import axios from 'axios';
  
export const doctor = (category) => {
	return axios.get(`https://www.homedoctor.cf/patient/${category}`)
	.then(response => {console.log(response)})
	.catch(error => {console.log(error)})
}

