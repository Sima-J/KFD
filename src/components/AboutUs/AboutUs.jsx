import React from 'react'
import {
    Row,
    Col,
    Container,
    Image 
        } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'



import './AboutUs.scss'
import picc from '../../assets/aboutus.png' 
        
export default function AboutUs() {
    const { t } = useTranslation()

/*
    , { useEffect }
    import { useTranslation } from 'react-i18next'
    import Aos from 'aos'
    const { t } = useTranslation()
    useEffect(() => {
    Aos.init({ duration: 2000 })
    }, [])

*/

    return (
                <div >
                    <Image  
                        src={picc}
                        fluid />
                
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