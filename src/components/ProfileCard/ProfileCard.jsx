import React, { useEffect, useState } from 'react'
import {Image, Card, Col, Row, Nav} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ADD_DONATION_ROUTE} from '../../router'
import { fetchMyPets } from '../../redux/actions/actions'
import { AddButton } from '../AddDonation'
import Cover from '../../assets/Pcover.png'
import Prof from '../../assets/Profile.png'
import './ProfileCard.scss'


export default function ProfileCard() {
    const userInfo = useSelector(state => state.user)
    const currentUser = useSelector(state => state.user.isLoggedIn)

    const dispatch = useDispatch()
    
    const { t } = useTranslation()

    const [uid, setuid] = useState('')

    const checkUid = () => {
        if (currentUser) {
          setuid(userInfo.user.uid)
        }
      }

      useEffect(() => {
        checkUid()
      }, [currentUser])
    
      useEffect(() => {
        dispatch(fetchMyPets( uid))
      }, [ uid])
    return (

            <div className = "fontcolor"  >
                <div>
                    <box className= "box">
                        {t('profilecard.desc1')}
                    </box>
                    <Image className = "cover" src={Cover} fluid/>
                </div>
            
                <div>              
                    <Card className="cardCol pt-1 " data-aos="zoom-in">

                        <div>
                            <Image src={Prof} fluid className = "profile" />
                        </div>

                        <text className= "name" >   
                            <h1 className = "align2"> 
                                {userInfo.user.name}
                            </h1> 
                        </text>   

                        <text className= "info">    
                            <h1 className = "align1"> 
                                +964 750 113 0495      
                                <br/> 
                                Iraq, Sulaymaniyah      
                            </h1> 
                        </text>

                        <br/>
                        <br/>
                        <br/>

                    </Card>

                    <Row style = {{margin: "auto"}}> 
                        <Col> <h1 className = "fontcolor"> My Donations </h1> </Col>

                        <Col >
                            <Nav.Link as={NavLink}  to={ADD_DONATION_ROUTE}>
                                <AddButton/>
                            </Nav.Link>
                        </Col>
                        <br/>
                    </Row>
                    
                    <div className = "MDonations" >
                        <div >
                            &nbsp;&nbsp; &nbsp;&nbsp;
                            Supply Name
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                            Quantity
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;                          
                            <FontAwesomeIcon icon = {faClock} className = "blue"/> &nbsp;
                            --Weeks-Days-Hours-Min       
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                            
                                <button className = "Delete" type="button">
                                    &nbsp; <FontAwesomeIcon icon={faTrash} /> &nbsp; 
                                    Delete &nbsp;
                                </button>
                                
                            
                        </div>  
                    </div>

                    <br/><br/>
                </div>
            </div>
            )}
