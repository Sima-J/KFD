import { LOGIN, lOGOUT } from './ActionTypes'
import { db } from '../../Firebase'

export const LogIn = user => {
  return {
    type: LOGIN,
    payload: user,
  }
}
export const LogOut = () => {
  return {
    type: lOGOUT,
  }
}

export const fetchUser = id => {
  return dispatch => {
    const docRef = db.collection('users').doc(id)
    docRef.get().then(doc => {
      if (doc.exists) {
        localStorage.setItem('loggedInUser', JSON.stringify(doc.data()))
        dispatch(LogIn(doc.data()))
      }
    })
  }
}
