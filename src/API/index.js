import axios from 'axios';
// const server= 'http://localhost:8081'
const server = 'https://jolly-vestments-dove.cyclic.app/'

const instance = axios.create({
    baseURL: `${server}`
})

export default instance;