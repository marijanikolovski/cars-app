import HttpService from "./HttpService";

class CarsService extends HttpService {
    async getAll() {
        try {
            const { data } = await this.client.get('cars');
      
            return data;
          } catch (error) {
            console.log(error);
          }
      
          return [];
    }

    async add(newCar) {
        try {
        const { data } = await this.client.post('cars', newCar);

        return data;
        } catch (error) {
        console.log(error);
        }

        return null;
    }

    async get(id) {
        try {
        const { data } = await this.client.get(`cars/${id}`);

        return data;
        } catch (error) {
        console.log(error);
        }

        return {};
    }

    async edit(id, newCar) {
        try {
        const { data } = await this.client.put(`cars/${id}`, newCar);

        return data;
        } catch (error) {
        console.log(error);
        }

        return null;
    }

    async delete(id) {
        try {
        const { data } = await this.client.delete(`cars/${id}`);

        return data;
        } catch (error) {
        console.log(error);
        }

        return {};
    }
}

export default new CarsService();