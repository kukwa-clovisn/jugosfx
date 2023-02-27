

import { createApp } from "vue";
import { getTestimonials } from "./app.js";

const vueApp = createApp({
    data() {
        return {
            TestimonialsArr: []
        };
    },
    mounted() {
        myfunction(getTestimonials());
    },
    methods: {
        async myfunction(arr) {
            try {
                this.TestimonialsArr = arr;

            }
            catch (err) {
                console.log(err)
            }


        }

    }
}

);

vueApp.mount("#testimonials");
