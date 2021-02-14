import {Component} from "react";
import Car from "./Car";
import {connect} from "react-redux";
import {deleteCar, updateCar} from "../store/carReduser";

class CarConteiner extends Component {
    render() {
        return (
            <Car {...this.props}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.carPage.cars
    };
}

export default connect(mapStateToProps,{deleteCar, updateCar})(CarConteiner);
