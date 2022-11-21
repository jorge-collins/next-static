
import axios from 'axios';

const worldCupApi = axios.create({
    baseURL: 'http://api.cup2022.ir/api/v1'
})



export default worldCupApi;