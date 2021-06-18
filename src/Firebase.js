import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBgDHh4vqddUxuk7N7B0yjXqkQX_udPNc8',
  authDomain: 'food-donation-3a70b.firebaseapp.com',
  projectId: 'food-donation-3a70b',
  storageBucket: 'food-donation-3a70b.appspot.com',
  messagingSenderId: '77207475879',
  appId: '1:77207475879:web:e507b3f97af250a9622d82',
  measurementId: 'G-HQJGRGHVSV',
}

firebase.initializeApp(firebaseConfig)
export default firebase
const db = firebase.firestore()
const storage = firebase.storage()

export { db, storage }
