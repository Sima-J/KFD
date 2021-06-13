import React, { useState, useEffect } from 'react'
import {
    Navbar,
    Nav,
    Button    
  } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NavLink, Redirect } from 'react-router-dom'
/*
import i18next from 'i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { selectedLang } from '../../redux/actions/actions'
const userId = useSelector(state => state.user)
*/

import Login from '../Modals/Login'


import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from '../../router'

import userStatus, { setUserInfo } from '../../redux/actions/user'
import SearchCard from "../SearchForm/SearchCard";
import logo from '../../assets/logo.svg'
import './MainNavbar.scss'
import firebase from '../../Firebase'

require('firebase/auth')



export default function MainNavbar() {
  const globaleLang = useSelector(state => state.langReducer)
  /* const [NavLanguage, setNavLanguage] = useState(globaleLang) */
  const userState = useSelector(state => state.user.isLoggedIn)

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [dirProperties, setDir] = useState({
    dir: 'ltr',
    className: 'ml-auto',
    textDir: 'text-left',
  })
  const [showLoginModal, setShowLoginModal] = useState(false)


   // check the user if loggedin or not
   useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(userStatus(true))
        dispatch(setUserInfo({ name: user.displayName, uid: user.uid }))
      } else {
        dispatch(userStatus(false))
      }
    })
  }, [])

  const handelLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(userStatus(false))

        Redirect('/')
      })
      .catch(() => {})
  }

  /*
  const selectedLanguage = lang => {
    i18next.changeLanguage(lang)
  }
  const handelOption = e => {
    localStorage.setItem('lang', e.target.value)
    dispatch(selectedLang(e.target.value))
    selectedLanguage(e.target.value)
    setNavLanguage(e.target.value)
    const { data } = useSelector(state => state.pets)
  } */

  const handelDir = () => {
    if (
      localStorage.getItem('lang') !== 'en' &&
      localStorage.getItem('lang') !== null
    ) {
      const newDir = 'rtl'
      const newClassName = 'mr-auto'
      const newtextDir = 'text-right'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.className = newClassName
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    } else {
      const newDir = 'ltr'
      const newClassName = 'ml-auto'
      const newtextDir = 'text-left'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.className = newClassName
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    }
  }

  useEffect(() => {
    handelDir()
  }, [globaleLang])




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
   
   {userState ? (
    <Button className='SBTN'
      Style={{
        fontWeight: 'bold',
        borderBottom: '2px solid white',
      }}
      
      onClick={handelLogout}
    >
      {' '}
      {t('navbar.logOut')}
    </Button>
  ) : (
    <Button className='SBTN'
      Style={{
        fontWeight: 'bold',
        borderBottom: '2px solid white',
      }}
      
      onClick={() => {
        setShowLoginModal(!showLoginModal)
      }}
    >
      {t('navbar.logIn')}
    </Button>
  )}

   

</Navbar.Collapse>
{/* </Router> */}
{showLoginModal ? (
  <Login
    onHide={() => {
      setShowLoginModal(!showLoginModal)
    }}
  />
) : null}
						
          
</Navbar>
        
    )
}

