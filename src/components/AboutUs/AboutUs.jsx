import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'

import './AboutUs.scss'
import picc from '../../assets/aboutus.png' 

export default function AboutUs() {
    return (
                <div>
                    <Image  
                        src={picc}
                        fluid />
                
                    <Container className = "font">
                    
                        <Row>
                            <Col className = "Header"><h1>What We Do</h1></Col>
                        </Row>

                        <Row >
                            <Col><h3 className= "space">Our Goals</h3></Col><Col><p className = "space">Our main goal of the system is to act as a bridge of communication between businesses and charity  organization, and allow users to donate food and they can reach out to each other and help out the people who are in need.</p></Col>
                        </Row>

                        <Row>
                            <Col><h3 className= "space">Our Mission</h3></Col><Col><p className = "space">Our mission is to help out people in need, we are trying to serve those who are in need with necessary food supplies, through charity organizations.</p></Col>
                        </Row>

                        <Row>
                            <Col><h3 className= "space">Our Value</h3></Col><Col><p className = "space">The greatest benefit of a donation is of helping the needy people around. Nowadays there are lots of people who need help in life in all aspects especially various essential things, by helping them to live in a unique way which is means by providing them the most important thing which is food.</p></Col>
                        </Row>

                    </Container>

                </div>
    )}