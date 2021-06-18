import React, {useState} from 'react'

import {
    Col,
    Container,
    Row,
    Button,
    Form, 
    
  } from 'react-bootstrap'
  import swal from 'sweetalert'
  import { db} from '../../Firebase'

// import { useTranslation } from 'react-i18next'

export default function AddDonationForm() {
    // const { t } = useTranslation()

    const [Title, setTitle] = useState('');
    const [FoodType, setFoodType] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Days, setDays] = useState('');
    const [Desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('Donated Food').doc(`${Title}, ${Date()}`).set({
            Title,
            FoodType,
            Quantity,
            Days,
            Desc,
        });
        setTitle('');
        setFoodType('');
        setQuantity('');
        setDays('');
        setDesc('');
        swal('','sucess', 'sucess');
    }

    // const firebaseupload = () => {
    //     const [image, setImage] = useState(null);

    //     const handlechange = e => {
    //         if (e.target.file[0]) {
    //             setImage(e.target.file[0]);

    //         }
    //     }
    //     const handleupload = e => {
    //         const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //         uploadTask.on(
    //             "state_changed",
    //             snapshot => {},
    //             error => { console.log(error);
    //             },
    //             () => {
    //                 storage
    //                 .ref("images")
    //                 .child(image.name)
    //                 .getDownloadURL()
    //                 .then(url => {});
    //             }
    //         )
    //     }
    // }
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
                <Form className="BoxForm" onSubmit={handleSubmit}>

                    <Form.Label htmlfor="Title" className="messages">
                        Title
                    </Form.Label>
                    <Form.Control type="text" id="Title"
                    value = {Title} 
                    onChange = {(e) => setTitle(e.target.value)} 
                    required/>

                    <br />

                    <Form.Label htmlfor="Type" className="messages">
                        What is food type?
                    </Form.Label>
                    <Form.Control type="text" id="Type"
                    value = {FoodType} 
                    onChange = {(e) => setFoodType(e.target.value)} 
                    required />

                    <br />

                    <Form.Label htmlfor="Type" className="messages">
                        Qunatity
                    </Form.Label>
                    <Form.Control type="number" id="Quntity"
                    value = {Quantity} 
                    onChange = {(e) => setQuantity(e.target.value)} 
                    required/>

                    <br />

                    <Form.Label htmlfor="Type" className="messages">
                        How many days the food will be available?
                    </Form.Label>
                    <Form.Control type="number" id="Quntity"
                    value = {Days} 
                    onChange = {(e) => setDays(e.target.value)} 
                    required/>

                    <br />

                    <Form.Label htmlFor="Description" className="messages">
                    Description
                    </Form.Label>
                    <Form.Control as="textarea" row="3"  type="text" id="message"
                    value = {Desc} 
                    onChange = {(e) => setDesc(e.target.value)} 
                    required/>

                    <Row >
                    <Col >
                    <Button className="Btn1" outline type="submit">
                        Add
                      </Button>
                    </Col>
                    
                    <Col>
                    <Button className="Btn2" outline type="Cancel">
                        Cancel
                      </Button>
                    </Col>
                </Row>

                </Form>
                </Col>
                <Row >
                    <div className="imageInput">
                        <form>
                            <input type="file" onChange/>
                            <button type= "submit" onClick  > Upload </button>
                        </form>
                    </div>
                </Row>
                
                </Row>
                
            </Container>
                </div>
            )}
