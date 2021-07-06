import React, { useState } from 'react'
import  {
    Navbar,
    Nav,Image, Button,Collapse,        DropdownButton,      Dropdown

        
        } 
    from 'react-bootstrap'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NavLink, Redirect } from 'react-router-dom'
import i18n from 'i18next'
    import userIcon from '../../assets/ProfileIcon.png'
import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE } from '../../router'
import SearchForm from "../SearchForm/SearchForm";
import logo from '../../assets/logo.svg'
import './MainNavbar.scss'
import firebase from '../../Firebase'
import { LogOut } from '../../redux/Authentication/AuthenticationActions'
import {
  OpenModal,
  OpenSettingModal,
  CloseModal,
  CloseSettingModal,
} from '../../redux'

require('firebase/auth')

export default function MainNavbar() {

  const dispatch = useDispatch()

  const { t } = useTranslation()
  const user = useSelector(state => state.authentication)
  const [profileDropDown, setprofileDropDown] = useState(false)

  const handleLanguageChange = lang => {
    i18n.changeLanguage(lang)
  }
  const signOut = () => {
    dispatch(LogOut())
    firebase.auth().signOut()
    setprofileDropDown(false)
    dispatch(CloseModal())
    dispatch(CloseSettingModal())
    localStorage.removeItem('loggedInUser')
    return <Redirect to="/" />
  }

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
                              {t('navbar.home')}
                    </Nav.Link>

                    <Nav.Link className="lins" activeStyle={{
                              fontWeight: 'bold',
                              }} as={NavLink} to={CONTACT_ROUTE}>
                              {t('navbar.contact')}
                    </Nav.Link>

                    <Nav.Link  className="lins" activeStyle={{
                               fontWeight: 'bold',
                               }} as={NavLink} to={ABOUT_ROUTE}>
                               {t('navbar.about')}
                    </Nav.Link>
                    {user.isLoggedIn ?
                      
                      (
                    <Nav.Link  className="lins" activeStyle={{
                                  fontWeight: 'bold',
                                  }} href='/#/searchresult?word=&select=All'>
                                  
                                  {t('navbar.donation')}
                        </Nav.Link> ) : ('')
                      }
                        
                    {user.isLoggedIn ?
                      
                      (
                        <Nav.Link  className="lins" activeStyle={{
                                  fontWeight: 'bold',
                                  }} as={NavLink} to={PROFILE_ROUTE}>
                                  
                                  {t('navbar.profile')}
                        </Nav.Link>
                      ) : ('')
                    }
                     
                    
                       
                     
    
    
                  

                  </Nav>
   
               

                </Navbar.Collapse>
                {user.isLoggedIn ?
                      
                  (
                    <SearchForm />
                  ) : ('')
                }
                    <Nav.Link>
                    <Button
                    onClick={() => handleLanguageChange(t('language'))}
                    type="button"
                    className="B16  items-center   border border-solid "
                  >
                    <FontAwesomeIcon icon="globe" className="" />
                    <div className="text-center ">{t('langText')}</div>
                  </Button>

                    </Nav.Link>

               
                <Dropdown>

                  {user.isLoggedIn ? (
                    <Button
                      onClick={() => setprofileDropDown(!profileDropDown)}
                      type="button" 
                      
                    >
                      <Image
                        src={user ? user.user.photo : userIcon}
                        alt="user"
                      />
                    </Button>
                  ) : (
                    <Button
                    className="B11"
                      type="button"
                      onClick={() => dispatch(OpenModal())}
                    >
                    {t("navbar.logIn")}
                    </Button>
                  )}


                <Collapse    className="B12" in={profileDropDown} >
                <DropdownButton     
                className="B12 mx-3 my-2   "
                title="Account">


                  <NavLink
                    to={PROFILE_ROUTE}
                    className="lins mx-4 text-center my-1   "
                    role="menuitem"
                  >
                    {user.isLoggedIn ? user.user.name : ''}
                  </NavLink>

                  <Button
                    type="button"
                    className="B14 mx-4 my-1 text-center "
                    onClick={() => dispatch(OpenSettingModal())}
                  >
                  {t("navbar.settings")}
                  </Button>

                  <Button
                    type="button"
                    onClick={signOut}
                    className="B15 mx-4 my-1 text-center   "
                    role="menuitem"
                  >
                  {t("navbar.logOut")}
                  </Button>
                  </DropdownButton>

                </Collapse>

                </Dropdown>

						  </Navbar>
          )}