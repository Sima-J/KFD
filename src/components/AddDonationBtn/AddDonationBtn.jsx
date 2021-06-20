import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

export default function AddDonationBtn() {
  const { t } = useTranslation()

  const history = useHistory()
  const handleClick = () => {
    history.push('/addItem')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-blue  text-md   text-white py-2 text-center  space-x-1 items-center   w-full shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
    >
      <span className=""> {t('home.addItem')} </span>
      <FontAwesomeIcon icon="plus" />
    </button>
  )
}
