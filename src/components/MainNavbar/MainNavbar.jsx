import React from 'react'
import {
    Navbar,
    Nav,
    Button
    
  } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from '../../router'
import SearchCard from "../SearchForm/SearchCard";
import logo from '../../assets/logo.svg'
import './MainNavbar.scss'

export default function MainNavbar() {
    return (
      <Navbar  expand="md" className="shadow-sm">
      <Navbar.Brand href="/">
    <img src={logo} alt="logo" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
    <Nav.Link className="lins" activeStyle={{
      fontWeight: 'bold',
     
    }} exact
    as={NavLink} to={HOME_ROUTE}>
    Home
    </Nav.Link>
    <Nav.Link className="lins" activeStyle={{
      fontWeight: 'bold',
     
    }} as={NavLink} to={CONTACT_ROUTE}>
    Contact
    </Nav.Link>
    <Nav.Link  className="lins" activeStyle={{
      fontWeight: 'bold',
     
    }} as={NavLink} to={ABOUT_ROUTE}>
    About
    </Nav.Link>
    <Nav.Link  className="lins" activeStyle={{
      fontWeight: 'bold',
     
    }} as={NavLink} to={SEARCH_ROUTE}>
    Donation
    </Nav.Link>
    <Nav.Link  className="lins" activeStyle={{
      fontWeight: 'bold',
     
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
   
   <Button className='SBTN'>Sign In</Button>
</Navbar.Collapse>
						
          
</Navbar>
        
    )
}

