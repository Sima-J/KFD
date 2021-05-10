import React from 'react'
import { FormControl, Form } from 'react-bootstrap'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchCard() {
    return (
        <Form inline className="input-group search-box">								
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <span className="input-group-addon"><FontAwesomeIcon icon="search" /></span>

    </Form>
    
    )
}
