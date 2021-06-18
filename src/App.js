/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import AddDonation from './containers/AddDonation'
import Profile from './containers/Profile'
import Search from './containers/Search'
import DonationDetails from './containers/DonationDetails'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  ADD_DONATION_ROUTE,
  PROFILE_ROUTE,
  DONATION_DETAILS_ROUTE,
  SEARCH_ROUTE,
} from './router'
import PrivateRoute from './privateroutes'
import NotFound from './containers/NotFound'

import './App.scss'
import './fontawsome'

function App() {
  return (
    <Fragment>
      <MainNavbar />
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route path={CONTACT_ROUTE} component={Contact} />
        <Route path={ABOUT_ROUTE} component={About} />

        <PrivateRoute path={PROFILE_ROUTE} component={Profile}>
          <Profile />
        </PrivateRoute>

        <PrivateRoute path={ADD_DONATION_ROUTE} component={AddDonation}>
          <AddDonation />
        </PrivateRoute>

        <PrivateRoute path={DONATION_DETAILS_ROUTE} component={DonationDetails}>
          <DonationDetails />
        </PrivateRoute>

        <PrivateRoute path={SEARCH_ROUTE} component={Search}>
          <Search />
        </PrivateRoute>

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App
