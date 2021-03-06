import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './Header.scss'
import home from '../../assets/Home.png'

export default function Header() {
    const { t } = useTranslation()
    return (
            <div className ="backgroundH">
                <Container >
                    <Row >
                        <Col>
                            <Image  
                            src={home}
                            fluid />
                        </Col>

                        <Col className ="text">
                            <h4>
                                {t('header.desc')} 
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}