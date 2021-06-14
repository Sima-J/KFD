import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap'

export default function AddButton() {
    return (
              <Button
                type="button"
                style={{ 
                        backgroundColor: '#30124E' , borderColor:'#30124E' , fontSize:'1rem'
                      }}>
                <FontAwesomeIcon icon="plus" className=" mx-2"/>
                <span className="">Add Your Donation </span>
              </Button>
            )}