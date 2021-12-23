import { getAuthorByEmail, getAuthorByUsername } from "../../../services/authors";

export function checkUsername(username){
    return getAuthorByUsername(username).then(item=>{
        return (!!item) ? "Username already exist" : "";
    });
}

export function checkEmail(email){
    return getAuthorByEmail(email).then(item=>{
        return (!!item) ? "Email already exist" : "";
    });
}