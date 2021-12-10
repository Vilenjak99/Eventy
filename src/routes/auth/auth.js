import './auth.scss';
import ButtonRipple from "../../components/buttonRipple/buttonRipple";
import {useState} from "react";
import LogIn from "../../components/auth/log_in/logIn";
import Register from "../../components/auth/register/register";

const pageStates = {
    REGISTER: "REGISTER",
    LOG_IN: "LOG IN",
}
export default function Auth(){
    const [isLoginState,setIsLoginState] = useState(true);

    const handleClick = (newValue)=>{
        setIsLoginState(newValue);
    }

    return(
        <div className={'container'}>
            <div className={'authContainer'}>
                <div className={'main'}>
                    {isLoginState && <LogIn/>}
                    {!isLoginState && <Register/>}
                </div>

                <ButtonRipple
                    className={`side ${isLoginState ? 'left' : 'right'}`}
                    onClick={()=> handleClick(!isLoginState)}
                    variant={'text'}
                    text={isLoginState ? pageStates.REGISTER : pageStates.LOG_IN}
                />

            </div>
        </div>
    );
}