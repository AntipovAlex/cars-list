import React from 'react';

const Car = props => {
    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.brand}</td>
                <td>{props.carNumber}</td>
                <td>{props.engineType}</td>
                <td>{props.model}</td>
                <td>
                    <button className="btn btn-outline-primary mr-2" onClick={() => {props.modalOpen()}}>Edit</button>
                    <button className="btn btn-outline-danger" onClick={() => {props.deleteCar(props.id)}} >Delete</button>
                </td>
            </tr>
    );
};

export default Car;
