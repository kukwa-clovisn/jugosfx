

import { createApp } from "vue";
import { firebaseApp, db } from './firebaseConfig.js';

import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";




const vueApp = createApp({
    data() {
        return {
            TestimonialsArr: [],
            width: 360,
            transition: 0,
            opacity: 1,
            transform: 0,
            index: 0
        };
    },
    beforeMount() {
        getDocs(collection(db, 'Testimonials')).then(res => {
            res.docs.map(item => {
                return this.TestimonialsArr.push(item.data());
            })


        }).catch(err => console.log(err))
    },
    watch: {
        // whenever index changes, this funtion will run
        index(newIndex, prevIndex) {
            if (this.index === 0) {

                this.width = 360;
                this.transform = 'translate3d(0px, 0px, 0px)';

                this.opacity = 1;
            } else if (this.index === 1) {
                this.width = 360;
                this.transform = 'translate3d(-360px, 0px, 0px)';

                this.opacity = 0;
            } else if (this.index === 2) {
                this.width = 360;
                this.transform = 'translate3d(0px, 0px, 0px)';

                this.opacity = 1;
            }
        }
    },
    methods: {
        myfunction() {


        }

    }
}

);

vueApp.mount("#testimonials");
