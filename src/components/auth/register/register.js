import {Input} from "@material-ui/core";
import ButtonRipple from "../../buttonRipple/buttonRipple";
import React, {useState} from "react";
import { insertAuthor } from "../../../services/authors";

export default function Register(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const handleClick = ()=>{
        let dateOfBirth = new Date()
        insertAuthor({email,username,password,dateOfBirth});
    }


    return(
        <div className={'authMainContainer'}>
            <h2>Register</h2>
            <Input color={'secondary'} name="username" placeholder={'username'} value={username} onChange={e=>setUsername(e.target.value)}/>    
            <Input color={'secondary'} name="email" placeholder={'email'} value={email} onChange={e=>setEmail(e.target.value)}/>
            <Input color={'secondary'} name="password" placeholder={'password'} type={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>    
            <ButtonRipple type="submit" onClick={handleClick} text={'REGISTER'}  width={'60%'}/>
        </div>
    );
}