import {carsApi} from "../api/api";


const ADD_CAR = "ADD_CAR"
const SET_CARS = "SET_CARS"
const DELETE_CAR = "DELETE_CAR"

let  initialState = {
    cars: [
        {id:"", brand: "", carNumber: "", engineType: "", model: ""},
    ]
}

const carReduser = (state = initialState, action) =>{
    switch (action.type){
        case ADD_CAR:
            let newCar = {
                brand: action.brand,
                carNumber: action.carNumber,
                engineType: action.engineType,
                model: action.model
            }
            return{
                ...state,
                cars: [...state.cars, newCar]
            }
        case SET_CARS: {
            return {...state, cars: [...action.cars]}
        }
        case DELETE_CAR: {
            return {...state, cars: state.cars.filter(p => p.id != action.carId)}
        }
        default:
            return state;
    }
}


export const AddCarAC = (data) => ({type: ADD_CAR, data });
export const setCarsAC = (cars) => ({type: SET_CARS, cars });
export const deleteCarAC = (carId) => ({type: DELETE_CAR, carId});

export const saveCar = (formData) =>
    async (dispatch) => {
    const data = await carsApi.postCar(formData)
        if(data){
            dispatch(AddCarAC(data))
        }

    }

export const getCarsThunkCreater = ()=> async(dispatch) => {
    const data = await carsApi.getCars()
    dispatch(setCarsAC(data.cars));
}

export const deleteCar = (carId) => async (dispatch) => {
    const data = await carsApi.delete(carId)
    if (data) {
        dispatch(deleteCarAC(carId))
    }
}

export const updateCar = (carId, carForm) => async (dispatch) => {
    const data = await carsApi.update(carId, carForm)
    if (data) {
        dispatch(setCarsAC(data))
    }
}

export default carReduser;
