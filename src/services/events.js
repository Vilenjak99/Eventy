import port from "./config";
export function getEvents() {
    return fetch(`http://localhost:${port}/events`)
        .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function insertEvent(event){
    let user = window.localStorage.getItem('currUser');
    let jsUser = JSON.parse(user);
    let data = {eventLocalization: event, author: jsUser }
    return fetch(`http://localhost:${port}/events`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(data)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function getEventBySlug(slug) {
    return fetch(`http://localhost:${port}/events?eventSlug=${slug}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function getEventsByTag(tag) {
    return fetch(`http://localhost:${port}/events?tag=${tag}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function getEventsByAuthor(author) {
    return fetch(`http://localhost:${port}/events?author=${author.username}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}
