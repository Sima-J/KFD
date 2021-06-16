import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import './Sponser.scss'
import Korek from '../../assets/Korek.png' 
import Asiacell from '../../assets/Asiacell.png' 
import Tishknet from '../../assets/Tishknet.png' 
import Fastlink from '../../assets/Fastlink.png'

export default function Sponser(){
    const { t } = useTranslation()
    return  (
                <div>
                    <Container>
                        <Row>
                            <Col ><h1 className = "Header"> {t('sponser.ourpartner')} </h1></Col>
                        </Row>

                        <Row>
                            <Col><h2 className = "style"> {t('sponser.ourpartnerdesc')} </h2></Col>
                        </Row>

                        <Row>
                            <Col>
                                <Image  
                                src={Korek}
                                fluid />
                            </Col>

                            <Col>
                                <Image  
                                src={Asiacell}
                                fluid />
                            </Col>

                        </Row>

                        <Row>

                            <Col>
                                <Image  
                                src={Tishknet}
                                fluid />
                            </Col>

                            <Col >
                                <Image 
                                src={Fastlink}
                                fluid />
                            </Col>

                        </Row>

                    </Container>

                </div>
            )}