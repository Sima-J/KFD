import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'



import './AboutUs.scss'
import picc from '../../assets/purplepic.png' 
        
export default function AboutUs() {
    const { t } = useTranslation()

    return (
                <div >
                    <Image  
                        src={picc}
                        fluid />
                        <h1 className="h1"> {t("aboutus.abus")} </h1>
                        <h3 className="h2"> {t("aboutus.weh")} </h3>
                
                    <Container >
                    
                        <Row>
                            <Col className = "Header"><h1 className = "textcolor"> {t('aboutus.whatwedo')} </h1></Col>
                        </Row>

                        <Row >
                            <Col><h3 className= "space"> {t('aboutus.ourgoal')} </h3></Col><Col><p className = "space"> {t('aboutus.ourgoaldesc')} </p></Col>
                        </Row>

                        <Row>
                            <Col><h3 className= "space"> {t('aboutus.ourmission')} </h3></Col><Col><p className = "space"> {t('aboutus.ourmissiondesc')} </p></Col>
                        </Row>

                        <Row>
                            <Col><h3 className= "space"> {t('aboutus.ourvalue')} </h3></Col><Col><p className = "space"> {t('aboutus.ourvaluedesc')} </p></Col>
                        </Row>

                    </Container>

                </div>
            )}