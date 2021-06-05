import React from 'react'
import {Col,Image} from 'react-bootstrap'
import './DonationContact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PIcon from '../../assets/ProfileIcon.png'


export default function DonationContact() 
{
    return (
        
             <Col>

                <table>

                    <thead>

                        <tr>
                            <Image className = "PIcon"
                            src={PIcon}
                            fluid />
                            <br/>
                            User Name Here
                        </tr>  

                    </thead> 
                                
                    <tbody>

                        <td className = "td">
                            Call the Owner
                            <br/>
                            <FontAwesomeIcon className="icon" icon="phone"/>{'  '}
                            +964 750 113 0495
                        </td>

                        <tr>
                            Iraq, Sulaymaniyah, Zerin
                        </tr>

                        <tr>
                            Quantity: 36
                        </tr>

                        <tr>
                            20/02/2021
                        </tr>

                        <tr>
                            Supply Expires in 20 Days
                        </tr>

                    </tbody>

                </table>          

             </Col>
        
             )
}

