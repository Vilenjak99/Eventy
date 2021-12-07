
export function getEvents() {
    return fetch('http://localhost:8080/events')
        .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function getEventBySlug(slug) {
    return fetch(`http://localhost:8080/events?eventSlug=${slug}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}
export function getEventsByTag(tag) {
    return fetch(`http://localhost:8080/events?tag=${tag}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}