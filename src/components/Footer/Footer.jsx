import React from "react";
import { useSelector } from 'react-redux'
 import { Nav, Col,Row, Image} from 'react-bootstrap'
 import { useTranslation } from 'react-i18next'
 import {NavLink} from 'react-router-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import logo from '../../assets/logo.svg'
 

import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE,SEARCH_ROUTE} from '../../router'
import "./Footer.scss";
  
const Footer = () => {
  const userState = useSelector(state => state.user.isLoggedIn)
  const { t } = useTranslation()
  return (
            <footer className = "cont">
              <Row>
                <Col className = "col" >
                  <h5 className="underline"> {t("footer.menu")}</h5>

                    <h6 className="list-unstyled">
                      <li>
                          <Nav.Link className="lin" 
                                    exact as={NavLink} to={HOME_ROUTE}> {t("footer.home")}
                          </Nav.Link>
                      </li>

                      {userState ? 
                        (
                          <li>
                            <Nav.Link  className="lin"
                                      as={NavLink} to={PROFILE_ROUTE}>{t("footer.profile")}
                            </Nav.Link>
                          </li>
                        ) : ('')
                    }
                    
                      <li>
                        <Nav.Link className="lin"  
                                  as={NavLink} to={CONTACT_ROUTE}>{t("footer.contact")}
                        </Nav.Link>
                      </li>

                      <li>
                        <Nav.Link  className="lin"  
                                   as={NavLink} to={ABOUT_ROUTE}>{t("footer.about")}
                        </Nav.Link>
                      </li>
                    
                    </h6>

                  </Col>

                  {userState ? 
                    (

                      <Col>
                        <h5 className="underline"> {t("footer.main_types")}</h5>
                        <h6 className="list-unstyled">
                            
                            <Nav.Link  className="lin " 
                                      as={NavLink} to={SEARCH_ROUTE}>{t("footer.donation")}
                            </Nav.Link>

                            <Nav.Link  className="lin " 
                                      >{t("footer.requdon")}
                            </Nav.Link>

                        </h6>
                      </Col>
                    ) : ('')
                  }
                                
                  <Col>
                    <h5 className="underline">{t("footer.contact")} </h5>
                    <h6 className="list-unstyled">
                      <li>

                        <span > 
                          <a className = 'text' href={`tel:${"+234081-1236-4568"}`}>
                            <FontAwesomeIcon className="icon" icon="phone"/>
                            &nbsp; {t("footer.phone")}
                          </a> 
                        </span>

                        <br/>

                        <span>
                          <a className = 'text' href={`mailto:${"contact@KFD.com"}`}>
                            <FontAwesomeIcon className="icon" icon="envelope"/>
                            &nbsp;  {t("footer.email")}
                          </a> 
                        </span>

                      </li>
                    </h6>
                  </Col>

                  <Col>
                    <h4 className="underline" > {t("footer.follow")} </h4>
                        <div className = "SocialProfile">

                            <FontAwesomeIcon  icon={['fab', 'instagram']} 
                                              className="iconf hover:text-darkgray fa-2x mx-2"
                                              onClick={()=> window.open("https://www.instagram.com/", "_blank")} />
                        
                            <FontAwesomeIcon  icon={['fab', 'facebook-square']} 
                                              className="iconf hover:text-darkgray fa-2x mx-2"
                                              onClick={()=> window.open("https://www.facebook.com/", "_blank")}/>
                          
                            <FontAwesomeIcon  icon={['fab', 'twitter']} 
                                              className="iconf hover:text-darkgray fa-2x mx-2"
                                              onClick={()=> window.open("https://www.twitter.com/", "_blank")}/>
                    
                        </div>
                  </Col>
                </Row>

                <Row style={{borderTop: '3px solid red' }}>
                  <Col>

                    <p className="text-center"> 
                      <Image src={logo} alt="logo"/> 
                      {t("footer.copy")}
                    </p>
                    
                  </Col>
                </Row>
            </footer>
          ); }; export default Footer;