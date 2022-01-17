import port from "./config";

export function insertComment(comment){
    return fetch(`http://localhost:${port}/comments`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(comment)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function getAllCommentsByEventId(eventId) {
    return fetch(`http://localhost:${port}/comments?eventId=${eventId}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function getAllCommentsByParentCommentId(id) {
    return fetch(`http://localhost:${port}/comments?parentCommentId=${id}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function updateComment(comment){
    return fetch(`http://localhost:${port}/comments`, {method:'PUT',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(comment)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}






