import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {Header} from '../../components/HomeCard'
import DonationsCarousal from '../../components/DonationsCarousal'
import './Home.scss'

export default function Home() {
  document.title = "Home";
  const { t } = useTranslation()
  const history = useHistory()
  const user = useSelector(state => state.authentication)

  return (
    <>
      <Header />
      {user.isLoggedIn  ? 
        (  <div className="   lg:mx-20  text-2xl p-5 py-14 ">
     
        <Button
          className="B1B"
          type="button"
          onClick={() => history.push('/searchresult?word=&select=Requested')}
        >
        {t("Donations.requdon")}
        </Button>
        <DonationsCarousal condition="Requested" />

        <Button
          type="button"
          className="B1B"
          onClick={() => history.push('/searchresult?word=&select=Donations')}
        >
        {t("Donations.donation")}        </Button>
        <DonationsCarousal condition="Donations" />  
      </div>) : ('') 
      }

    </>
  )
}
