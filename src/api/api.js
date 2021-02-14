import axios from "axios";

const instance = axios.create({
    baseURL: "https://test-backend.esverito.com/"
})


export const carsApi = {
    getCars() {
        return instance.get(`api/car`)
            .then(response => response.data)
    },
    postCar(formData) {
        return instance.post(`api/car`, formData )
    },
    delete(carId){
        return instance.delete(`api/car/${carId}`)
    },
    update(carId, carForm){
        return instance.put(`api/car/${carId}`, carForm)
    }
}
