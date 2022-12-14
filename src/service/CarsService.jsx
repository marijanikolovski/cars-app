import { axiosInstance } from "./HttpService"

class CarsService  {
    async getAll() {
        const { data } = await axiosInstance.get('cars');
        return data;
    }

    async add(newCar) {
        const { data } = await axiosInstance.post('cars', newCar);
        return data;
    }

    async get(id) {
        const { data } = await axiosInstance.get(`cars/${id}`);
        return data;
    }

    async edit(id, newCar) {
        const { data } = await axiosInstance.put(`cars/${id}`, newCar);
        return data;
    }

    async delete(id) {
        const { data } = await axiosInstance.delete(`cars/${id}`);
        return data;
    }
}

export default new CarsService();