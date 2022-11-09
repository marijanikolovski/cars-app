import { axiosInstance } from './AxiosService'

class CarsService {
    async getAll() {
        const data  = await axiosInstance.get('cars');
        return data.data;
    }

    async add(newCar) {
        const data = await axiosInstance.post('cars', newCar);
        return data;
    }


    async get(id) {
        const data = await axiosInstance.get(`/cars/${id}`)
            return data;
    }

    async edit(id, newCar) {
        const data = await axiosInstance.put(`/cars/${id}`, newCar);
        return data;
    }
}

export default new CarsService();