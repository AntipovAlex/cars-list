import React from 'react';
import {Field, reduxForm} from "redux-form";
import {saveCar} from "../store/carReduser";
import {connect} from "react-redux";


const ModalFormData = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="brand"
                    type="text"
                    placeholder="Brand"
                    component="input"
                    className="form-control-brand"
                />
                <Field
                    name="carNumber"
                    type="text"
                    placeholder="Car Number"
                    component="input"
                    className="form-control-model"
                />
            </div>
            <div>
                <Field
                    name="model"
                    type="text"
                    placeholder="Model"
                    component="input"
                    className="form-control-number"
                />
                <Field
                    name="engineType"
                    type="text"
                    placeholder="Engine Type"
                    component="input"
                    className="form-control-enginerType"
                />
            </div>
            <div className="form-group">
                <button>Save</button>
            </div>
        </form>
    );
};

const ModalFormRedux = reduxForm({
    form: "cars"
})(ModalFormData)

const ModalForm = ({saveCar}) => {

    const onSubmit = (formData) => {
        saveCar(formData)
    }
    return (
        <div>
            <ModalFormRedux  onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        cars: state.carPage.cars
    }
}

export default connect (mapStateToProps, {saveCar}) (ModalForm);


