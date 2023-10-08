import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return(
        <div className="content content-margined">
            <div className= "fulfillment-header">
                <h3>Fulfillments</h3>
        </div>
        <div className="fulfillment-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>USER</th>
                        <th>SHIPPED</th>
                        <th>SHIPPED AT</th>
                        <th>DELIVERED</th>
                        <th>DELIVERED AT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.orders.map((fulfillment)=> (
                        <tr key={fulfillment._id}>
                            <td>{fulfillment._id}</td>
                            <td>{fulfillment.createAT}</td>
                            <td>{fulfillment.totalPrice}</td>
                            <td>{fulfillment.user.name}</td>
                            <td>{fulfillment.isShipped.toString()}</td>
                            <td>{fulfillment.ShippedAt}</td>
                            <td>{fulfillment.isDelivered.toString()}</td>
                            <td>{fulfillment.deliveredDate}</td>
                            <td>
                                <Link to={"/fulfillment/" + fulfillment._id} className="button secondary">
                                    Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
};

export default Fulfillment;