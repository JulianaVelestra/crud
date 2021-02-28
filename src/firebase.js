import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDNqZp7tYoodzfSYdO5zg6c3qGbcT4x0MM",
    authDomain: "crud-5059f.firebaseapp.com",
    projectId: "crud-5059f",
    storageBucket: "crud-5059f.appspot.com",
    messagingSenderId: "631862400803",
    appId: "1:631862400803:web:3063edb1cf941791069e96"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)