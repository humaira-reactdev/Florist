// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfHI37VTgqaqIWIUYFKC33QxGGDbsoisg",
  authDomain: "florist-156b6.firebaseapp.com",
  projectId: "florist-156b6",
  storageBucket: "florist-156b6.appspot.com",
  messagingSenderId: "3629578618",
  appId: "1:3629578618:web:b80fb73035a58c35663ec3",
  measurementId: "G-4W4X7RTSSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);