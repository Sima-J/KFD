import React from 'react'
import { Col, Image } from 'react-bootstrap'
import Donation from '../../assets/donation.png'
import './DonationSection.scss'

export default function DonationSection() 
{
    return (
        
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
            )
}
