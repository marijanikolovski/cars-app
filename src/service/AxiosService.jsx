import axios from "axios";

class AxioxService {
    constructor() {
        this.axsiosInstanceClass = axios.create({
            baseURL: 'http://localhost:3000/api/'
        })
    }
}

export const axiosInstance = new AxioxService().axsiosInstanceClass;