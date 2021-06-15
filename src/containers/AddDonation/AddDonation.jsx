import React from "react";


import {
    Col,
    Container,
    Row,
    Button,
    Form, 
    
  } from 'react-bootstrap'
import './AddDonation.scss'

export default function AddDonation() {
    return (

        <div>
        <Container className="Box border rounded border-black" >
            <Row>
                <Col className="tcol">
                <h1 className="title">Add New Donation</h1>
                </Col>
            </Row>
            <Row>
            <Col md='6'>
            <Form className="BoxForm ">
                <Form.Label htmlfor="Title" className="messages">
                    Title
                </Form.Label>
                <Form.Control type="text" id="Title"/>
                <br />
                <Form.Label htmlfor="Type" className="messages">
                    What is food type?
                </Form.Label>
                <Form.Control type="text" id="Type"/>
                <br />
                <Form.Label htmlfor="Type" className="messages">
                    Qunatity
                </Form.Label>
                <Form.Control type="number" id="Quntity"/>
                <br />
                <Form.Label htmlfor="Type" className="messages">
                    How many days the food will be available?
                </Form.Label>
                <Form.Control type="number" id="Quntity"/>
                <br />
                <Form.Label htmlFor="Description" className="messages">
                Description
                </Form.Label>
                <Form.Control as="textarea" row="3"  type="text" id="message"   />
            </Form>
            </Col>
            <Row >
                <div className="imageInput">
                    <form>
                        <input type="file" />
                    </form>
                </div>
            </Row>
            
            </Row>
            <Row >
                <Col >
                <Button className="Btn1" outline type="Add">
                    Add
                  </Button>
                </Col>
                <Col>
                <Button className="Btn2" outline type="Cancel">
                    Cancel
                  </Button>
                </Col>
            </Row>
        </Container>

        </div>
    )
}