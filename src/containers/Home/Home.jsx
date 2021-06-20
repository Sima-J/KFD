import React from 'react'

import { useHistory } from 'react-router-dom'
import { Button, } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {Header} from '../../components/HomeCard'
import DonationsCarousal from '../../components/DonationsCarousal'

export default function Home() {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <>
      <Header />
      <div className="   lg:mx-20  text-2xl p-5 py-14 ">
        <Button
          className="bg-yellow focus:outline-none p-2 inline px-6 rounded-r-2xl shadow-md hover:shadow-none tansition duration-300 ease-in-out hover:cruser"
          type="button"
          onClick={() => history.push('/searchresult?word=&select=Requested')}
        >
        {t("Donations.requdon")}
        </Button>
        <DonationsCarousal condition="Requested" />

        <Button
          type="button"
          className="bg-yellow focus:outline-none focus:border-red p-2 inline px-6 rounded-r-2xl shadow-md hover:shadow-none tansition duration-300 ease-in-out hover:cruser"
          onClick={() => history.push('/searchresult?word=&select=Donations')}
        >
        {t("Donations.donation")}        </Button>
        <DonationsCarousal condition="Donations" />

      </div>
    </>
  )
}
