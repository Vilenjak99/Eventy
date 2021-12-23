import {Input} from "@material-ui/core";
import ButtonRipple from "../../buttonRipple/buttonRipple";
import React, {useState} from "react";
import { insertAuthor } from "../../../services/authors";
import { checkEmail, checkUsername } from "./registerLogic";

export default function Register(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");

    async function handleClick(){

        setEmailError(await checkEmail(email));
        setUsernameError(await checkUsername(username));
        
        //chekEmail() insted of emailError because its async
        if (! await checkEmail(email) && ! await checkUsername(username)){
            let dateCreated = new Date()
            let user = {email,username,password,dateCreated}
            console.log(user);
            insertAuthor(user).then(data=>console.log(data));
            window.localStorage.setItem('currUser', JSON.stringify(user))
        } 
    }


    return(
        <div className={'authMainContainer'}>
            <h2>Register</h2>
            <Input color={'secondary'} name="username" placeholder={'username'} value={username} onChange={e=>setUsername(e.target.value)}/>
            <span>{usernameError}</span>
            <Input color={'secondary'} name="email" placeholder={'email'} value={email} onChange={e=>setEmail(e.target.value)}/>
            <span>{emailError}</span>
            <Input color={'secondary'} name="password" placeholder={'password'} type={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>    
            <ButtonRipple type="submit" onClick={handleClick} text={'REGISTER'}  width={'60%'}/>
        </div>
    );
}