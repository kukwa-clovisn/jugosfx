

import { createApp } from "vue";
import { firebaseApp, db } from './firebaseConfig.js';

import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";




const vueApp = createApp({
    data() {
        return {
            TestimonialsArr: []
        };
    },
    mounted() {
        getDocs(collection(db, 'Testimonials')).then(res => {
            res.docs.map(item => {
                return this.TestimonialsArr.push(item.data());
            })


        }).catch(err => console.log(err))
    },
    methods: {
        myfunction(arr) {

            this.TestimonialsArr = arr;
        }

    }
}

);

vueApp.mount("#testimonials");
