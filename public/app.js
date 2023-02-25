

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// import { getFirestore, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9xMu6mf_82oJT5kZPKyr7FRIwWqJ4vaw",
    authDomain: "jugosexchange.firebaseapp.com",
    databaseURL: "https://jugosexchange-default-rtdb.firebaseio.com",
    projectId: "jugosexchange",
    storageBucket: "jugosexchange.appspot.com",
    messagingSenderId: "848597305499",
    appId: "1:848597305499:web:4c9d795e6ac0e665e91e3e",
    measurementId: "G-M3W8P31Z1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
console.log(db)

const colRef = collection(db, "Testimonials");

const docsSnap = await getDocs(colRef);

docsSnap.forEach(doc => {
    console.log(doc.data())
})


