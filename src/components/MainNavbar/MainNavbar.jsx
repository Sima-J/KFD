import React from 'react'
import {
    Navbar,
    Nav,
    
  } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom'
import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from '../../router'
import SearchCard from "../SearchForm/SearchCard";
import logo from '../../assets/logo.svg'
import './MainNavbar.scss'

export default function MainNavbar() {
    return (
      <Navbar  expand="md">
      <Navbar.Brand href="/">
    <img src={logo} alt="logo" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link className="lin" activeStyle={{
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    }} exact
    as={NavLink} to={HOME_ROUTE}>
    Home
    </Nav.Link>
    <Nav.Link className="lin" activeStyle={{
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    }} as={NavLink} to={CONTACT_ROUTE}>
    Contact
    </Nav.Link>
    <Nav.Link  className="lin" activeStyle={{
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    }} as={NavLink} to={ABOUT_ROUTE}>
    About
    </Nav.Link>
    <Nav.Link  className="lin" activeStyle={{
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    }} as={NavLink} to={SEARCH_ROUTE}>
    Donation
    </Nav.Link>
    <Nav.Link  className="lin" activeStyle={{
      fontWeight: 'bold',
      borderBottom: '2px solid white',
    }}as={NavLink} to={PROFILE_ROUTE}>
    Profile
    </Nav.Link>
    <Nav.Link 
    as="select"
    className="select-language  mr-4  shadow-none bg-light  border-1 " 
    style={{ outline: 'none' }}
  >
    <option value="en">
     English
    </option>
    <option value="kr">
       كوردى
    </option>
  </Nav.Link>
  <SearchCard />

   </Nav>
   
   <button type="button">Sign In</button>

</Navbar.Collapse>
						
          
</Navbar>
        
    )
}

