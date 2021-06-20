import React from 'react'
import { useTranslation } from 'react-i18next'
import AddDonationBtn from '../AddDonationBtn/AddDonationBtn'

export default function ProfileCardsHeader() {
  const { t } = useTranslation()
  return (
    <div className=" grid  md:px-20 md:mx-20 p-5">
      <div className="grid grid-cols-2 bg-white mx-3 px-4 py-2 rounded-2xl shadow-lg">
        <div className="font-bold text-xl self-center">
          {t('profile.myItems')}
        </div>
        <div className="justify-self-end">
          <AddDonationBtn />
        </div>
      </div>
    </div>
  )
}
