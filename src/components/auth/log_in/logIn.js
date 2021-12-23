import {Input} from "@material-ui/core";
import './login.css';
import ButtonRipple from "../../buttonRipple/buttonRipple";
import React, { useEffect, useState } from "react";
import {validation} from "./logInLogic";
import { getAuthorByUsernameOrEmail } from "../../../services/authors";


export default function LogIn(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = ()=>{
         getAuthorByUsernameOrEmail(username,password).then(item=>validation(item));
    }

    const handleLogout = () => {
        setUsername("");
        setPassword("");
        localStorage.clear();
      };
    return(
        <div className={'container authMainContainer'}>
            <h2>Log in</h2>
            <Input color={'secondary'} placeholder={'email/username'} value={username} onChange={e=>setUsername(e.target.value)}/>
            <Input color={'secondary'} placeholder={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>
            <ButtonRipple text={'LOG IN'} width={'60%'} onClick={handleLogin}/>
            <ButtonRipple text={'LOG OUT'} width={'60%'} onClick={handleLogout}/>
        </div>
    );
}