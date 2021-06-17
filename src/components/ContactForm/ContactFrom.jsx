/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import  {
    Container,
    Row,
    Col,
    Button,
    Form, 
        } from 'react-bootstrap'
  import { useTranslation } from 'react-i18next'
  import './ContactForm.scss'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactFrom() {
  const { t } = useTranslation()
    return (
              <div className="mb-4 py-4">
                  <Container className="Box border rounded border-black"  >
                    <Row> 
                      <Col className="TCol">
                        <h1 className="Title"> {t("contactus.title")} </h1>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <Form className="BoxForm ">
                          <p className="h4 text-center mb-4">
                            {t("contactus.leaveusamessage")} </p>

                          <Form.Label htmlFor="name" className="grey-text">
                            {t("contactus.name")}
                          
                          </Form.Label>
                          <Form.Control type="text" id="Name"  />

                          <br />

                          <Form.Label htmlFor="Email" className="grey-text"/>
                          <Form.Control  type="email" id="email" placeholder="Email Address"  />

                          <br />

                          <Form.Label htmlFor="subject" className="grey-text">
                            {t("contactus.subject")}
                          </Form.Label>
                          <Form.Control type="text" id="subject"  />

                          <br />

                          <Form.Label htmlFor="message" className="grey-text">
                            Your Messabe
                          </Form.Label>
                          <Form.Control as="textarea" row="3"  type="text" id="message"   />

                          <div className="text-center my-4 ">
                            <Button className="Btn" outline type="submit">
                              Send
                            </Button>
                          </div>

                        </Form>

                      </Col>
                  
                      <Row className="FICON mx-auto" >
                        <Col  md={12} >
                          <div   className="ml-4 mb-4"            >
                            <a href={`tel:${"+234081-1236-4568"}`}>
                              <FontAwesomeIcon className="ic"
                              icon="phone"
                              size="2x"
                              />

                              <span style={{ color: 'black' }}>+234081-1236-4568</span>
                            </a>
                          </div>

                          <div className=" ml-4"        >
                            <a href={`mailto:${"contact@KFD.com"}`}>
                              <FontAwesomeIcon className="ic"
                                  icon="envelope"
                                  size="2x"
                              />{' '}
                              <span  style={{ color: 'black' }}>contact@KFD.com</span>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                </Container>
              </div>
            )}