import React from 'react'
import {
    Row,
    Col,
    Image } from 'react-bootstrap'
import Donation from '../../assets/donation.png'
import './DonationSection.scss'

export default function DonationSection() {
    return (
        <div>        
            <Row>
                <Col className = "col">
                    <Image className = "Dimag"
                        src={Donation}
                        fluid />
                    <br/>
                    <text className = "Pname">Milk</text>
                    <br/>
                    <text className = "stakeholder">Supermarket  </text>
                    <br/>
                    <text className = "description">Description </text>
                    <br/>
                    <h1 className = "desc">
                        This is where we put the description of the donation products 
                        that are available to be donated or are requested to be given, 
                        this gives a breif idea as to what is the product and what is 
                        used for its benifits or the manfacturing company
                    </h1>
                    
                
                </Col>

                <Col >
                    <h1 className= "table">This is just an experiment</h1>
                        <table className ="table">
                        
                            <thead>
                            <tr>
                                <th>name</th>
                                <th>height</th>
                                <th>place</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Monte Falco</td>
                                <td>1658</td>
                                <td>Parco Foreste Casentinesi</td>
                            </tr>
                            <tr>
                                <td>Monte Falterona</td>
                                <td>1654</td>
                                <td>Parco Foreste Casentinesi</td>
                            </tr>
                            </tbody>
                        </table>
                        table details 
                </Col>
            </Row>
        
        </div>
    )
}
