import { firebaseApp, db } from './firebaseConfig.js';

import { collection, getDocs, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";


// const colREf = db.collection('Testimonials');

// const snapshot = await colREf.get();
// snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });

const TestimonialsArr = getDocs(collection(db, 'Testimonials')).then(res => {
    res.docs.forEach(item => {
        return console.log(item.data());
    })
}).catch(err => console.log(err))


// collecting data from form input for testimonials.

const formEl = document.querySelector('#form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData)
    console.log(data)




    addDoc(collection(db, 'Testimonials'), {
        email: data.email,
        message: data.message,
        name: data.name,
        occupation: data.occupation,

    })

})





