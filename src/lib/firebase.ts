import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBI54caUAaRZped4dmnCe_E2MMwr3OnBec",
    authDomain: "college-platform-nith.firebaseapp.com",
    databaseURL: "https://college-platform-nith-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "college-platform-nith",
    storageBucket: "college-platform-nith.appspot.com",
    messagingSenderId: "330963636071",
    appId: "1:330963636071:web:c1ab8eb0307113b723e9c2",
    measurementId: "G-ZF69NHFJ31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
