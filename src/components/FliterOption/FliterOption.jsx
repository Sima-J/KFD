import React from 'react'
import './FilterOptions.scss'
import {
    Container,
    Row,
    // Col,
    Button,
    Form, 
  } from 'react-bootstrap'

export default function FliterOption() {
    return (
        <div className = "margin">
            <Container >
            <Row >
            <h3 className = "header">Fltered by:</h3>
            
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>
            <Row className ="bold">
                Status
                <br />
                
            </Row>
            <Row>
                <Form>
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Requested Donations</span> <br />
                <input type="checkbox" />  <span className="ml-2 text-gray-700"> Donations</span>
                    </Form>              
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>
            <Row className ="bold">
                Quantity
                <br />
            </Row>
            <Row >
            <input type="number" placeholder="Min" min="1" className="inbox" /> &#8212; <input type="number" placeholder="Max" min="1" className="inbox" /> <Button className ="button">Apply</Button>
            </Row>
            <Row>
                <Form>
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600"  /><span className="ml-2 text-gray-700">Under 25</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">25 - 50</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">50 - 100</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">100 - 200</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">200 - 400</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">Over 400</span> <br />
            </Form>
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>

            <Row className ="bold">
                Location
                    <br />
            </Row>
            <Row>
                <Form>
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Erbil</span> 
                <input type="checkbox" className ="btn1" />  <span className="ml-2 text-gray-700">Zakho</span> <br />
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Silemani</span> 
                <input type="checkbox" className ="btn" />  <span className="ml-2 text-gray-700">Shaqlawa</span> <br />
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Duhok</span> 
                <input type="checkbox" className ="btn2" />  <span className="ml-2 text-gray-700">Halabja</span> <br />
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Kalar</span> 
                <input type="checkbox" className ="btn3" />  <span className="ml-2 text-gray-700">Darbandikhan</span> <br />
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Ranya</span> 
                <input type="checkbox" className ="btn4" />  <span className="ml-2 text-gray-700">Said Sadiq</span> <br />
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700">Sharazwr</span> 
                <input type="checkbox" className ="btn5" />  <span className="ml-2 text-gray-700">Chamchamal</span> <br /> <br /> <br />
                </Form>
            </Row>

        </Container>
        </div>
       
            
        
        
        
    )
}
