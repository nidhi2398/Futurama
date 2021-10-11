import React, { Component } from 'react'
import axios from axios;
import { Table, Card, CardText, CardBody, } from 'reactstrap';
import "./Dashboard.css";

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            api_data: []
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        let url = "https://api.sampleapis.com/futurama/characters";
        let headers = {
            "Content-Type": "application/json",
        };
        axios.get(url, {
            headers: headers
        })
            .then(response => {
                this.setState({
                    api_data: response.data
                })
                console.log(response.dat)
            })
            .catch(error => {
                console.log(error);
            });
    };

    render(){
        const { api_data } = this.state;
        return(
            <div className = "container">
                <Card className = "main-div">
                    <CardBody>
                        <Table hover className="table-data">
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Buyer</th>
                                    <th>Seller</th>
                                    <th>Broker</th>
                                    <th>Variety</th>
                                    <th>Station</th>
                                    <th>Delivery By</th>
                                    <th>Quantity</th>
                                    <th>Quantity Unit</th>
                                    <th>Confirmation</th>
                                    <th>Original Price</th>
                                    <th>Accepted Price</th>
                                    <th>Price Unit</th>
                                    <th>Images</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    api_data.map(row => {
                                        if(row.hasProperty("name") && row.hasProperty("images")) {
                                            return(
                                                <tr className="date-row">
                                                    <th scope="row">{row.id}</th>
                                                    <td>{row.type}</td>
                                                    <td>{row.status}</td>
                                                    <td>{row.buyer}</td>
                                                    <td>{row.seller}</td>
                                                    <td>{row.broker}</td>
                                                    <td>{row.variety}</td>
                                                    <td>{row.station}</td>
                                                    <td>{row.delivery}</td>
                                                    <td>{row.quantity}</td>
                                                    <td>{row.quantity.unit}</td>
                                                    <td>{row.confirmation}</td>
                                                    <td>{row.accepted}</td>
                                                    <td>{row.price}</td>
                                                    <td>
                                                        <img src={row.images.main} style={{borderRadius:'50%', width:'60px', height:'60px'}}></img>
                                                    </td>
                                                </tr>
                                            )
                                        } else if(row.hasProperty("name")) {
                                            return(
                                                <tr className="date-row">
                                                    <th scope="row">{row.id}</th>
                                                    <td>{row.type}</td>
                                                    <td>{row.status}</td>
                                                    <td>{row.buyer}</td>
                                                    <td>{row.seller}</td>
                                                    <td>{row.broker}</td>
                                                    <td>{row.variety}</td>
                                                    <td>{row.station}</td>
                                                    <td>{row.delivery}</td>
                                                    <td>{row.quantity}</td>
                                                    <td>{row.quantity.unit}</td>
                                                    <td>{row.confirmation}</td>
                                                    <td>{row.accepted}</td>
                                                    <td>{row.price}</td>
                                                    <td>
                                                        {/* <img src={row.images.main} style={{borderRadius:'50%', width:'60px', height:'60px'}}></img> */}
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Dashboard;
