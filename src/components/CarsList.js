import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./Modal";
import "./styles.css";
import {Table} from "react-bootstrap";
import ModalForm from "./ModalForm";
import {connect} from "react-redux";
import {getCarsThunkCreater} from "../store/carReduser";
import CarConteiner from "./CarConteiner";


class CarsList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ismodal: false,
            modalInputName: "",
        };
    }

    componentDidMount() {
        this.props.getCarsThunkCreater()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.cars.length != prevProps.cars.length){
            this.props.getCarsThunkCreater()
            this.modalClose()

        }
    }

    modalOpen() {
        this.setState({
            ismodal: true,
        });
    }

    modalClose() {
        this.setState({
            modalInputName: "",
            ismodal: false
        });
    }

    render() {
        let carElement = this.props.cars.map((p) => (
            <CarConteiner  modalOpen={e => this.modalOpen(e)}  key={p.id} id={p.id} brand={p.brand} carNumber={p.carNumber} engineType={p.engineType}
                          model={p.model}/>))
        return (
            <div className="CarsList">
                <span>
                    <h1>Cars List</h1>
                    <button  className="btn-outline-primary " onClick={e => this.modalOpen(e)}>ADD CAR</button>
                </span>
                <div>
                    <Table striped bordered hover className="mt-2">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Car Number</th>
                            <th scope="col">Engine Type</th>
                            <th scope="col">Model</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {carElement}
                        </tbody>
                    </Table>
                </div>
                    <Modal show={this.state.ismodal} handleClose={e => this.modalClose(e)}>
                    <h2>ADD NEW CAR</h2>
                    <div className="form-group">
                        <ModalForm initialValues={this.props.cars} onClick={this.activeMode}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        cars: state.carPage.cars
    }
}


export default connect(mapStateToProps, { getCarsThunkCreater})(CarsList);
