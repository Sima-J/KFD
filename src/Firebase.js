import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBgDHh4vqddUxuk7N7B0yjXqkQX_udPNc8',
  authDomain: 'food-donation-3a70b.firebaseapp.com',
  projectId: 'food-donation-3a70b',
  storageBucket: 'food-donation-3a70b.appspot.com',
  messagingSenderId: '77207475879',
  appId: '1:77207475879:web:e507b3f97af250a9622d82',
}
firebase.initializeApp(firebaseConfig)

export default firebase
