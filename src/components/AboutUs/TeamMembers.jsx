import React from 'react'
import  {
    Card,
    Row,
    Col,
    Image 
        } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sima from '../../assets/sima.png'
import n from '../../assets/n.png'
import rebaz from '../../assets/rebaz.png'
import sana from '../../assets/sana.png' 
import './Team.scss'

export default function TeamMembers() {
    return (
            <div className = "TeamSection ">

              <Card className="Card  px-5 pb-5 text-center">

                <Card.Body>

                  <h2 className="h1-responsive font-weight-bold my-5">
                    Meet The Team
                  </h2>
            
                  <Row>
                    <Col lg="3" md="6" className="mb-lg-0 mb-5">
                      <Image roundedCircle 
                      src={sima}
                      fluid  
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Sima Jazaa</h5>
                      <p className="text-uppercase blue-text">Software Engineer</p>
                  
                      <ul className="list-unstyled mb-0">
                    
                        <a href="https://github.com/Sima-J" className="p-2 fa-lg">
                        <FontAwesomeIcon className = "Font" icon={['fab', 'github']} />

                        </a>

                          <a href="https://www.facebook.com/sima.jaza.315" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'facebook']} />
                    
                        </a>

                      </ul>
                    </Col>

                    <Col lg="3" md="6" className="mb-lg-0 mb-5">
                      <Image roundedCircle 
                          src={sana}
                          fluid  
                          />
                      <h5 className="font-weight-bold mt-4 mb-3">Sana Jazaa</h5>
                      <p className="text-uppercase blue-text">Software Engineer</p>
                      
                      <ul className="list-unstyled mb-0">

                        <a href="https://github.com/Sana-JZ" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'github']} />
                        </a>

                        <a href="https://www.facebook.com/sana.jaza.56" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'facebook']} />
                        </a>

                      </ul>

                    </Col>

                    <Col lg="3" md="6" className="mb-lg-0 mb-5">
                      <Image roundedCircle 
                          src={n}
                          fluid  
                                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Mudhafar Dler</h5>
                      <p className="text-uppercase blue-text">Software Engineer</p>
                      
                      <ul className="list-unstyled mb-0">

                        <a href="https://github.com/jellywiz" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'github']} />
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100009686322373" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'facebook']} />
                        </a>

                      </ul>

                    </Col>

                    <Col lg="3" md="6" className="mb-lg-0 mb-5">
                      <Image roundedCircle 
                          src={rebaz}
                          fluid  
                                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Rebaz Farid</h5>
                      <p className="text-uppercase blue-text">Network and Security</p>
                      
                      <ul className="list-unstyled mb-0">

                        <a href="https://github.com/rebaz36" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'github']} />
                        </a>

                        <a href="https://www.facebook.com/rebaz.farid" className="p-2 fa-lg">
                          <FontAwesomeIcon className = "Font" icon={['fab', 'facebook']} />
                        </a>

                      </ul>

                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          )}