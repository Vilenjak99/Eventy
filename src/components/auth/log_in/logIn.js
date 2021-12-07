import {Input} from "@material-ui/core";
import './login.css';
import ButtonRipple from "../../buttonRipple/buttonRipple";
import React from "react";
export default function LogIn(){
    return(
        <div className={'container authMainContainer'}>
            <h2>Log in</h2>
            <Input color={'secondary'} placeholder={'email'}/>
            <Input color={'secondary'} placeholder={'password'}/>
            <ButtonRipple text={'LOG IN'} width={'60%'}/>
        </div>
    );
}