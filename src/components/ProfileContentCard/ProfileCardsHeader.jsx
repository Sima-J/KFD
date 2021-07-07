import React from 'react'
import { useTranslation } from 'react-i18next'
import {Row} from 'react-bootstrap'
import AddDonationBtn from '../AddDonationBtn/AddDonationBtn'

export default function ProfileCardsHeader() {
  const { t } = useTranslation()
  return (
    <Row className="border p-4 mx-5 mt-4 mb-2">
          {t('profile.myDonations')}
          <AddDonationBtn />
      </Row>
  )
}
