import React, { useState } from 'react'
import  {
    Navbar,
    Nav,Image, Button,Collapse,        DropdownButton,      Dropdown,       NavItem

        
        } 
    from 'react-bootstrap'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NavLink, Redirect } from 'react-router-dom'
import i18n from 'i18next'
    import userIcon from '../../assets/ProfileIcon.png'
import { CONTACT_ROUTE, HOME_ROUTE, ABOUT_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from '../../router'
import SearchCard from "../SearchForm/SearchCard";
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
                          }} as={NavLink} to={SEARCH_ROUTE}>
                          {t('navbar.donation')}
                        </Nav.Link>
                      ) : ('')
                    }

                    {user.isLoggedIn ?
                      
                      (
                        <Nav.Link  className="lins" activeStyle={{
                                  fontWeight: 'bold',
                                  }}as={NavLink} to={PROFILE_ROUTE}>
                                  
                                  {t('navbar.profile')}
                        </Nav.Link>
                      ) : ('')
                    }
    
                    <Nav.Link>
                    <button
                    onClick={() => handleLanguageChange(t('language'))}
                    type="button"
                    className=" hover:bg-darkBlue hover:text-white items-center px-3  space-x-2  text-blue  rounded inline-flex focus:outline-none items-center border border-solid border-blue justify-center"
                  >
                    <FontAwesomeIcon icon="globe" className="" />
                    <div className="text-center ">{t('langText')}</div>
                  </button>

                    </Nav.Link>

                    {user.isLoggedIn ?
                      
                      (
                        <SearchCard />
                      ) : ('')
                    }

                  </Nav>
   
                <NavItem>
                <Dropdown>

                  {user.isLoggedIn ? (
                    <Button
                      onClick={() => setprofileDropDown(!profileDropDown)}
                      type="button"
                      aria-controls="example-collapse-text"
        aria-expanded={profileDropDown}
                    >
                      <Image
                        className="h-6 w-6 mx-auto  roundedCircle"
                        src={user ? user.user.photo : userIcon}
                        alt=""
                      />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => dispatch(OpenModal())}
                    >
                    {t("navbar.logIn")}
                    </Button>
                  )}

                <Collapse in={profileDropDown} >
                <DropdownButton id="dropdown-basic-button" className="px-4 mt-1 " title="Account">

                  <NavLink
                    to={PROFILE_ROUTE}
                    className="block mx-4 my-1 px-4 py-2 text-sm  hover:bg-darkBlue hover:text-white"
                    role="menuitem"
                  >
                    {user.isLoggedIn ? user.user.name : ''}
                  </NavLink>

                  <Button
                    type="button"
                    className="mx-4 my-1 text-left block focus:outline-none px-4 py-2 text-sm  hover:bg-darkBlue hover:text-white w-full"
                    onClick={() => dispatch(OpenSettingModal())}
                  >
                  {t("navbar.settings")}
                  </Button>

                  <Button
                    type="button"
                    onClick={signOut}
                    className="mx-4 my-1 text-left block focus:outline-none px-4 py-2 text-sm  hover:bg-darkBlue hover:text-white w-full"
                    role="menuitem"
                  >
                  {t("navbar.signUp")}
                  </Button>
                  </DropdownButton>

                </Collapse>

                </Dropdown>

                </NavItem>

                </Navbar.Collapse>
                  
						  </Navbar>
          )}