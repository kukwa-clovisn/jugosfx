import { app, db } from './firebaseConfig'
console.log(db)

const colRef = collection(db, "Testimonials");

const docsSnap = await getDocs(colRef);

docsSnap.forEach(doc => {
    console.log(doc.data())
})


