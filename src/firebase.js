// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvgGNRRafYLht3XsBHMWcEy8v1NG933hw",
  authDomain: "kalynycstudios.firebaseapp.com",
  projectId: "kalynycstudios",
  storageBucket: "kalynycstudios.appspot.com",
  messagingSenderId: "525558324462",
  appId: "1:525558324462:web:375f86d358e7f2396827ff",
  measurementId: "G-64LQ65WCC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
