import { app, db } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
console.log(db)

const colRef = collection(db, "Testimonials");

const docsSnap = await getDocs(colRef);

docsSnap.forEach(doc => {
    console.log(doc.data())
})


