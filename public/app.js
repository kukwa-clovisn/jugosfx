
// getting in collection data
db.collections('Testimonials').get().then(
    (data) => {
        console.log(data.docs)
    }
)
