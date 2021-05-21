import React from 'react'
import './Home.scss'
import {
    Row,
    Col,
    Container,
    Image } from 'react-bootstrap'
import HomePic from '../../assets/HomePic.png'

export default function Home() {
    return (
        <div className = "back">
            <Container>
            <Row>
                <Col>
                <Image  
                    src={HomePic}
                fluid />
                </Col>
                <Col className = "text">
                    <h4>The Food Donation WebApp is an online platform that works as a bridge to connect restaurants, food-supplier companies and  Supermarkets to organization. </h4>
                </Col>
            </Row>
        </Container>
        </div>
        
    )
}