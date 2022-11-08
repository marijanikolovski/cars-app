import { axiosInstance } from './AxiosService'

class CarsService {
    async getAll() {
            const data  = await axiosInstance.get('cars');
            return data.data;
    }
}

export default new CarsService();