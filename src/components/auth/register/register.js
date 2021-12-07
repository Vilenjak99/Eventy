import {Input} from "@material-ui/core";
import ButtonRipple from "../../buttonRipple/buttonRipple";
import React from "react";

export default function Register(){
    return(
        <div className={'authMainContainer'}>
            <h2>Register</h2>
            <Input color={'secondary'} placeholder={'username'}/>
            <Input color={'secondary'} placeholder={'email'}/>
            <Input color={'secondary'} placeholder={'password'} type={'password'}/>
            <ButtonRipple text={'REGISTER'} width={'60%'}/>
        </div>
    );
}