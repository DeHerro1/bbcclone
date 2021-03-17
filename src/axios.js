import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://test.anchoratechs.com/'
})

export default instance;