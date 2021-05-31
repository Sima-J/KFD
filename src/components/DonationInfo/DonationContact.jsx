import React from 'react'
import {Col,Image} from 'react-bootstrap'
import './DonationContact.scss'
import PIcon from '../../assets/ProfileIcon.png'

export default function DonationContact() {
    return (
        
            <Col >
              <h1>This is just an experiment</h1>
              <table>
                 <thead>
                      <tr>
                          
                          <th>
                          <Image className = "PIcon"
                          src={PIcon}
                          fluid />
                          <br/>
                          User Name Here
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td className = "ColColor">
                          <h5>Call the Owner</h5>
                          <h5>+964 750 113 0495</h5>
                          </td>
                      </tr>
                      <tr>
                          <td>Iraq, Sulaymaniyah, Zerin</td>
                      </tr>
                      <tr>
                          <td>Quantity: 36</td>
                      </tr>
                      <tr>
                          <td>20/02/2021</td>
                      </tr>
                      <tr>
                          <td>Supply Expires in 20 Days</td>
                      </tr>
                      </tbody>
                  </table>
                  table details 
            </Col>
        
    )
}
