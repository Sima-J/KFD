import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import {
 Button
  
} from 'react-bootstrap'
import '../AddDonationForm/AddDonation.scss'

export default function AddDonationBtn() {
  const { t } = useTranslation()
  const history = useHistory()
  const handleClick = () => {
    history.push('/adddonation')
  }
  return (
    <Button
      type="button"
      onClick={handleClick}
      className="AddDonBut py-2 text-center  px-3  "
    >
      <span className=""> {t("Donations.addd")} </span>
      <FontAwesomeIcon icon="plus" />
    </Button>
  )
}
