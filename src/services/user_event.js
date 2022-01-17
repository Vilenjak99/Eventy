import port from "./config";
export function visit(event, user){
    //najpre proveri dal ima vec taj zapis u sorije vreme
   // findLatestVisitForGivenParameters(event, user)
    let data = {event: event, date: new Date(), user: JSON.parse(user)};
    return fetch(`http://localhost:${port}/visits`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(data)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function findLatestVisitForGivenParameters(event, user){
    let u = JSON.parse(user);
    return fetch(`http://localhost:${port}/visits?user-slug=${u.slug}&event-slug=${event.slug}`)
    .then(data => data.json()).catch( err => {
        console.log(err.message);
        console.log(u.slug + '\n' + event.slug)
    })
}

export function findVisitByDate(date){
    return fetch(`http://localhost:${port}/visits?date=${date}`)
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}