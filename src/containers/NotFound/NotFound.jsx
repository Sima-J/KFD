import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/dilmun.png'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className=" grid p-10 font-bold bg-header h-screen justify-center items-center ">
      <div className="bg-white text-center gap-2 p-10 bg-opacity-90 shadow-inner grid justify-center  ">
        <h1 className="text-2xl text-red">{t('notFound.oops')}</h1>
        <h1 className="">{t('notFound.explain')}</h1>
        <Link
          to="/"
          className="justify-self-center  p-2 text-blue border border-blue rounded-xl mt-3 flex space-x-2  items-center hover:bg-blue hover:text-white"
        >
          {t('navbar.home')}
        </Link>
        <img
          src={logo}
          alt=""
          className="justify-self-center  p-2  mt-3 flex space-x-2  items-center   max-h-40 "
        />
      </div>
    </div>
  )
}
