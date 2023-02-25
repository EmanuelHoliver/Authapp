//firebase config key setup
import  firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

//Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA1l4HbXFlobqbHff2DzzB9qNQojshKfio',
  authDomain: 'fir-conf-89384.firebaseapp.com',
  projectId: 'fir-conf-89384',
  storageBucket: 'fir-conf-89384.appspot.com',
  messagingSenderId: '562427772309',
  appId: '1:562427772309:web:e26ff30e59eab7e9298a9c',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export {firebase};