import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'
import './Header.scss'
import home from '../../assets/Home.png'

export default function Header() {
    return (
            <div className ="background">
                <Container >
                    <Row >
                        <Col>
                            <Image  
                            src={home}
                            fluid />
                        </Col>

                        <Col className ="text">
                            <h4>
                                The Food Donation WebApp is an online platform 
                                that works as a bridge to connect restaurants, 
                                food-supplier companies and  Supermarkets to 
                                organization. 
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}