import React from "react";
 import { Nav, Col,Row, Image} from 'react-bootstrap'
 import { useTranslation } from 'react-i18next'
 import {NavLink} from 'react-router-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import logo from '../../assets/logo.svg'
 

import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE,SEARCH_ROUTE} from '../../router'
import "./Footer.scss";
  
const Footer = () => {
  const { t } = useTranslation()
  return (
            <footer className = "cont">
              <Row>
                <Col className = "col" >
                  <h5 className="underline"> Menu</h5>

                    <h6 className="list-unstyled">
                      <li>
                          <Nav.Link className="lin" 
                                    exact as={NavLink} to={HOME_ROUTE}>Home
                          </Nav.Link>
                      </li>
                    
                      <li>
                        <Nav.Link  className="lin"
                                   as={NavLink} to={PROFILE_ROUTE}>Profile
                        </Nav.Link>
                      </li>
                    
                      <li>
                        <Nav.Link className="lin"  
                                  as={NavLink} to={CONTACT_ROUTE}>Contact
                        </Nav.Link>
                      </li>

                      <li>
                        <Nav.Link  className="lin"  
                                   as={NavLink} to={ABOUT_ROUTE}>About
                        </Nav.Link>
                      </li>
                    
                    </h6>

                  </Col>

                  <Col>
                    <h5 className="underline"> Main Types</h5>
                    <h6 className="list-unstyled">
                        
                        <Nav.Link  className="lin " 
                                   as={NavLink} to={SEARCH_ROUTE}>Donation
                        </Nav.Link>

                        <Nav.Link  className="lin " 
                                   >Requested Donations
                        </Nav.Link>

                    </h6>
                  </Col>
                                
                  <Col>
                    <h5 className="underline">Contact Us </h5>
                    <h6 className="list-unstyled">
                      <li>

                        <span > 
                          <a className = 'text' href={`tel:${"+234081-1236-4568"}`}>
                            <FontAwesomeIcon className="icon" icon="phone"/>
                            &nbsp; +234081-1236-4568 
                          </a> 
                        </span>

                        <br/>

                        <span>
                          <a className = 'text' href={`mailto:${"contact@KFD.com"}`}>
                            <FontAwesomeIcon className="icon" icon="envelope"/>
                            &nbsp;  Contact@KFD.com
                          </a> 
                        </span>

                      </li>
                    </h6>
                  </Col>

                  <Col>
                    <h4 className="underline" > Follow Us </h4>
                        <div className = "SocialProfile">
                        
                          <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} className="iconf hover:text-darkgray fa-2x mx-2"/>
                          </a>

                          <a href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} className="iconf hover:text-darkgray fa-2x mx-2"/>
                          </a>

                          <a href="https://www.twitter.com/">
                            <FontAwesomeIcon icon={['fab', 'twitter']} className="iconf hover:text-darkgray fa-2x mx-2"/>
                          </a>
                    
                        </div>
                  </Col>
                </Row>

                <Row style={{borderTop: '3px solid red' }}>
                  <Col>

                    <p className="text-center"> 
                      <Image src={logo} alt="logo"/> 
                        © Copyright 2021 - KFD 
                    </p>
                    
                  </Col>
                </Row>
            </footer>
          ); }; export default Footer;