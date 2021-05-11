import React from 'react'
import {
    Row,
    Col,
    Container } from 'react-bootstrap'

export default function AboutUs() {
    return (
        <div>
        <Container>
            <Row>
                <Col>What We Do</Col>
            </Row>
            <Row>
                <Col>Our Goals</Col><Col><p>our goal is </p></Col>
            </Row>
            <Row>
                <Col>Our Mission</Col><Col><p>our goal is </p></Col>
            </Row>
            <Row>
                <Col>Our Value</Col><Col><p>our goal is </p></Col>
            </Row>
        </Container>
           </div>
    )
}
