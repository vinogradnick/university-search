// todo make work with Firebase = database
// Special for this file
// todo make work with json file
// todo do work json sirealization
// todo make sync database information -> localstorage & json_file
// todo make connector ->
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

const firebaseDatabase = Firebase.initializeApp({
  apiKey: 'AIzaSyCh7v6s5WIGMETcT-vqqcq9qSROiJp14LY',
  authDomain: 'university-77bec.firebaseapp.com',
  databaseURL: 'https://university-77bec.firebaseio.com',
  projectId: 'university-77bec',
  storageBucket: 'university-77bec.appspot.com',
  messagingSenderId: '713552458128'
})
// todo make references to universityList search
export const Database = firebaseDatabase.database()
