export function insertAuthor(author){
    return fetch(`http://localhost:8080/authors`, {method:'POST',headers:{'Content-Type': 'application/json'} ,body: JSON.stringify(author)})
    .then(data => data.json()).catch( err => {
        console.log(err.message);
    })
}