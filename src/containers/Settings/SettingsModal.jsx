import React, { useState, useEffect } from 'react'
import { Modal, ModalTransition } from 'react-simple-hook-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'
import { db } from '../../Firebase'

import { CloseSettingModal, FetchUser } from '../../redux'
import 'react-simple-hook-modal/dist/styles.css'

export default function Settings() {
  const isModalOpen = useSelector(state => state.SettingsModal)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.authentication)
  const [userData, setUserData] = useState()
  document.title = "Settings";

  useEffect(() => {
    setUserData(user)
  }, [user])

  const handleChnage = e => {
    setUserData({
      ...userData,
      user: {
        ...userData.user,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    dispatch(CloseSettingModal())
    const userRef = db.collection('users').doc(userData.user.uui)
    userRef
      .set(userData.user, { merge: true })
      .then(() => dispatch(FetchUser(userData.user.uui)))
      .then(() => window.location.reload(false))
  }

  return (
    <>
      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen.state}
        transition={ModalTransition.BOTTOM_UP}
      >
        <div className="grid grid-cols-1  ">
          <div className="grid grid-flow-col items-center  border-b border-grey pb-2 mb-3 ">
            <h1 className="font-black text-xl">{t('setting.setting')}</h1>
          </div>

          {userData && userData.isLoggedIn === true ? (
            <form onSubmit={handleFormSubmit} className="border">
              <div className=" grid grid-cols-1 md:grid-cols-2 space-x-2  items-center shadow p-3">
                <div className="grid gap-4 ">
                  <div className="grid justify-center    pt-2">
                    <img
                      src={userData.user.photo}
                      className="shadow rounded-full h-32 w-32 align-middle  object-cover justify-self-center"
                      alt="profile"
                    />
                  </div>
                </div>
                <div className="grid gap-4  ">
                  <div>
                    <label
                      htmlFor={t('setting.name')}
                      className="text-darkgray"
                    >
                      {t('setting.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:outline-none focus:ring-1 focus:border-blue border border-grey w-full inline p-1 rounded"
                      placeholder={t('setting.name')}
                      value={userData.user.name}
                      onChange={handleChnage}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={t('setting.phone')}
                      className="text-darkgray"
                    >
                      {t('setting.phone')}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="focus:outline-none focus:ring-1 focus:border-blue border border-grey w-full inline p-1 rounded"
                      placeholder={t('setting.phone')}
                      value={userData.user.phone}
                      onChange={handleChnage}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={t('setting.city')}
                      className="text-darkgray"
                    >
                      {t('setting.city')}
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="focus:outline-none focus:ring-1 focus:border-blue border border-grey w-full inline p-1 rounded"
                      placeholder={t('setting.city')}
                      value={userData.user.city}
                      onChange={handleChnage}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-center p-3  mt-3">
                <button
                  type="submit"
                  className="bg-blue focus:outline-none justify-self-center hover:bg-darkBlue hover:shadow-none w-32 shadow-md tan px-4 py-1 rounded-full text-white transition duration-500 ease-in-out"
                >
                  {t('setting.save')}
                </button>

                <button
                  type="button"
                  onClick={() => dispatch(CloseSettingModal())}
                  className="bg-white hover:bg-blue hover:shadow-none focus:outline-none justify-self-center shadow-md   w-32  tan px-4 py-1 rounded-full text-blue border hover:text-white transition duration-500 ease-in-out"
                >
                  {t('setting.close')}
                </button>
              </div>
            </form>
          ) : (
            <div className="justify-center items-center grid">
              <FontAwesomeIcon icon="spinner" spin size="7x" />
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
