import port from "./config";

export function findLikesForCommentByLikeType(commentId, type){
    return fetch(`http://localhost:${port}/likes?commentId=${commentId}&type=${type}`)
        .then(data => data.json()).catch( err => {
            console.log(err.message);
        })
}

export function insertLike(likeType, userId, commentId){
    let likeModel = {likeType: likeType, userId: userId, commentId: commentId}
    console.log(likeModel)
    return fetch(`http://localhost:${port}/likes`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(likeModel)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function updateLike(like){
    return fetch(`http://localhost:${port}/likes`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(like)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

export function existsLikeByCommentIdAndUserId(commentId, userId){
    return fetch(`http://localhost:${port}/likes?commentId=${commentId}&userId=${userId}`)
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}

