import React from 'react'
import {
    Row,
    Col,
    Container,
    Image } from 'react-bootstrap'

import './Sponser.scss'
import Korek from '../../assets/Korek.png' 
import Asiacell from '../../assets/Asiacell.png' 
import Tishknet from '../../assets/Tishknet.png' 
import Fastlink from '../../assets/Fastlink.png'

export default function Sponser(){
    return(
        <div>
            <Container>
               <Row>
                   <Col className = "Header"><h1>Our Partners</h1></Col>
             </Row> 
             <Row>
                  <Col><h2 className = "style">Working with our partner. A strong network. We have formed alliances</h2></Col>
             </Row>
             <Row>
                 <Col>
                    <Image  
                    src={Korek}
                    fluid />
                 </Col>
                 <Col>
                 <Image  
                    src={Asiacell}
                    fluid />
                 </Col>
             </Row>
             <Row>
                 <Col>
                 <Image  
                    src={Tishknet}
                    fluid />
                 </Col>
                 <Col >
                 <Image 
                    src={Fastlink}
                    fluid />
                 </Col>
             </Row>





            </Container>
        </div>
    )
}