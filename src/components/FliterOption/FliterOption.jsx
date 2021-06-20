import React from 'react'
import './FilterOptions.scss'
import {
    Container,
    Row,
    Button,
    Form, 
  } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function FliterOption() {
    const { t } = useTranslation()
    return (
        <div className = "margin">
            <Container >
            <Row >
            <h3 className = "header"> {t('filter.filteredby')} </h3>
            
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>
            <Row className ="bold">
                {t("filter.status")}
                <br />
                
            </Row>
            <Row>
                <Form>
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> <span className="ml-2 text-gray-700"> {t("filter.reqdon")} </span> <br />
                <input type="checkbox" />  <span className="ml-2 text-gray-700"> {t("filter.donation")} </span>
                    </Form>              
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>
            <Row className ="bold">
                {t("filter.quantity")}
                <br />
            </Row>
            <Row >
            <input type="number" placeholder="Min" min="1" className="inbox" /> &#8212; <input type="number" placeholder="Max" min="1" className="inbox" /> <Button className ="button"> {t("filter.apply")} </Button>
            </Row>
            <Row>
                <Form>
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600"  /><span className="ml-2 text-gray-700"> {t("filter.under")} </span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t("filter.one")}</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t("filter.two")}</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t("filter.three")}</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t("filter.four")}</span> <br />
                    <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t("filter.over")}</span> <br />
            </Form>
            </Row>
            <Row className ="color"><div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div> <div>&#8212;</div></Row>

            <Row className ="bold">
            {t("filter.location")}
                    <br />
            </Row>
            <Row>
                <Form>
                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.erbil")}</span> 

                <input type="checkbox" className ="btn1" />  
                <span className="ml-2 text-gray-700">{t("filter.zakho")}</span> <br />

                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.slemani")}</span> 

                <input type="checkbox" className ="btn" />  
                <span className="ml-2 text-gray-700">{t("filter.shaqlawa")}</span> <br />

                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.duhok")}</span> 

                <input type="checkbox" className ="btn2" />  
                <span className="ml-2 text-gray-700">{t("filter.halbja")}</span> <br />

                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.kalar")}</span> 

                <input type="checkbox" className ="btn3" />  
                <span className="ml-2 text-gray-700">{t("filter.darband")}</span> <br />

                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.ranya")}</span> 

                <input type="checkbox" className ="btn4" />  
                <span className="ml-2 text-gray-700">{t("filter.said")}</span> <br />

                <input type="checkbox" className="form-radio h-4 w-4 text-yellow-600"/> 
                <span className="ml-2 text-gray-700">{t("filter.sharazwr")}</span> 

                <input type="checkbox" className ="btn5" />  
                <span className="ml-2 text-gray-700">{t("filter.cham")}</span> <br /> <br /> <br />
                </Form>
            </Row>

        </Container>
        </div>
    )
}
