import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/main.css'
import VueCookies from 'vue3-cookies'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Jrn1bxPs-pV4ge548RRJ1IznlCwey_E",
  authDomain: "contact3129-795cc.firebaseapp.com",
  projectId: "contact3129-795cc",
  storageBucket: "contact3129-795cc.appspot.com",
  messagingSenderId: "342110914065",
  appId: "1:342110914065:web:4361e5e8bb8bf0503dd3b0",
  measurementId: "G-5YF56YM5T1"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);

createApp(App).use(router).use(VueCookies, {
    expireTimes: "1d"
}).mount('#app')
