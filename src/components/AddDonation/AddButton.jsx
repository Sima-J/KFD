import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function AddButton() {
  const { t } = useTranslation()
    return (
              <Button
                type="button"
                
                style={{ 
                        backgroundColor: '#30124E' , borderColor:'#30124E' , fontSize:'1rem'
                      }}>
                <FontAwesomeIcon icon="plus" className=" mx-2"/>
                <span className=""> {t('addbutton.adddonation')} </span>
              </Button>
            )}