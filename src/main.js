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
  apiKey: "AIzaSyB6U1ukAv2fnj8o4ZCEkhn1Hk17HNx2tSc",
  authDomain: "contact3129.firebaseapp.com",
  projectId: "contact3129",
  storageBucket: "contact3129.appspot.com",
  messagingSenderId: "642954258850",
  appId: "1:642954258850:web:35573fc471d1d647642afb"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);

createApp(App).use(router).use(VueCookies, {
    expireTimes: "1d"
}).mount('#app')
