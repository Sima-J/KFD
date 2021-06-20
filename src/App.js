/* eslint-disable react/jsx-fragments */
import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ModalProvider } from 'react-simple-hook-modal'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Profile from './containers/Profile'
import DonationDetails from './containers/DonationDetails/DonationDetails'
import Search from './containers/SearchResult/SearchResult'
import AddDonation from './containers/AddDonation/AddDonation'
import Settings from './containers/Settings/SettingsModal'
import PrivateRoute from './PrivateRoute'
import NotFound from './containers/NotFound'
import './fontawsome'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  ADD_DONATION_ROUTE,
  PROFILE_ROUTE,
  DONATION_DETAILS_ROUTE,
  SEARCH_ROUTE,
} from './router'

import './App.scss'


import { FetchProducts } from './redux'
import Login from './containers/LogIn'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return null
  }, [pathname])
  const dispatch = useDispatch()

  dispatch(FetchProducts())
  
  return (
    <>
      <ModalProvider>
        <Login />
        <Settings />
        <MainNavbar />
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <PrivateRoute path={PROFILE_ROUTE}>
            <Profile />
          </PrivateRoute>
          <Route path={ABOUT_ROUTE} component={About} />
          <Route path={CONTACT_ROUTE} component={Contact} />
          <Route path={DONATION_DETAILS_ROUTE} component={DonationDetails} />
          <Route path={SEARCH_ROUTE} component={Search} />
          <PrivateRoute path={ADD_DONATION_ROUTE}>
            <AddDonation />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </ModalProvider>
    </>
  )
}

export default App