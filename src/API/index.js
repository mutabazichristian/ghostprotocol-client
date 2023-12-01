import axios from 'axios';
const server= 'http://localhost:8081'

const instance = axios.create({
    baseURL: `${server}`
})

export default instance;