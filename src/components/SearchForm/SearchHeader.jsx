import React from 'react'
import  {
    Row,
    Col
        } 
  from 'react-bootstrap'
// import { useTranslation } from 'react-i18next'
import { AddButton } from '../AddDonation'
import SearchCard from './SearchCard'

export default function SearchHeader() {
  /* const { t } = useTranslation() */
    return (
            <div  style={{ 
                          backgroundImage: `url("https://i.pinimg.com/originals/4b/93/28/4b93286dca71bbf97bc24ab523755366.jpg")` 
                          ,backgroundRepeat: 'no-repeat', height:'50%', backgroundSize: 'cover' ,  backgroundPosition: 'center'
                        }}>
                        
              <Row className="py-5 px-md-5 " style = {{margin: "auto"}}>
                <Col   className="  mb-5 mx-5 ">
                  <SearchCard/>
                </Col>

                <Col className="mb-5 mx-2">
                  <AddButton/>
                </Col>
              </Row> 
            </div>
          )}