import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Modal, ModalTransition } from 'react-simple-hook-modal'

import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { db } from '../../Firebase'
import { LogIn } from '../../redux/Authentication/AuthenticationActions'
import { CloseModal, OpenModal, OpenSettingModal } from '../../redux'
import 'react-simple-hook-modal/dist/styles.css'

export default function Login() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const location = useLocation()
  const LoginModal = useSelector(state => state.LogInModal)
  const { mode } = location.state || { from: { pathname: '/' } }

  useEffect(() => {
    if (mode === 'restricted') {
      dispatch(OpenModal(true))
    }
  }, [mode])

  const insertData = result => {
    dispatch(
      LogIn({
        uui: result.uid,
        email: result.email,
        photo: result.photoURL,
        name: result.providerData[0].displayName,
      })
    )
    dispatch(CloseModal())

    if (result.metadata.a === result.metadata.b) {
      const userRef = db.collection('users').doc(result.uid)
      userRef.set(
        {
          uui: result.uid,
          email: result.email,
          photo: result.photoURL,
          name: result.providerData[0].displayName,
        },
        { merge: true }
      )
      dispatch(OpenSettingModal())
    }
  }

  const uiConfig = {
    signInflow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: result => {
        insertData(result)
      },
    },
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const docRef = db.collection('users').doc(user.uid)
      docRef.get().then(doc => {
        if (doc.exists) {
          localStorage.setItem('loggedInUser', JSON.stringify(doc.data()))
          dispatch(LogIn(doc.data()))
        }
      })
    }
  })
  const close = () => {
    dispatch(CloseModal())
  }

  return (
    <>
      <Modal
        id="any-unique-identifier"
        isOpen={LoginModal.state}
        transition={ModalTransition.BOTTOM_UP}
      >
        <div className="grid grid-cols-1  grid-rows-3">
          <div className="grid grid-flow-col items-center  border-b border-grey pb-2 mb-3 ">
            <h1 className="font-black text-xl"> {t("login.KFD")} </h1>
            <button
              type="button"
              className="border border-grey shadow-md hover:shadow-inner focus:outline-none  transition duration-700 ease-in-out text-grey font-semibold hover:text-red py-2 px-4 rounded justify-self-end"
              onClick={close}
            >
              x
            </button>
          </div>
          <div className="row-span-2 m-auto   ">
            <h1 className="font-medium text-center text-lg font-black">
              {LoginModal.isAddItem === false ? (
                "Sign Up"
              ) : (
                <div className="text-red"> {t("login.log-in")}</div>
              )}
            </h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
