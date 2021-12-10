export function getEvents() {
    return fetch('http://localhost:8080/events')
        .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function insertEvent(event){
    let data = {eventLocalization: event, author: {firstname: "alek",lastname: "bogi", email: "alek@gmail.com"}}
    console.log(JSON.stringify(data));
    return fetch(`http://localhost:8080/events`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(data)})
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
