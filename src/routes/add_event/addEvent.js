import {Input, setRef} from "@material-ui/core";
import { useState } from "react";
import Swal from "sweetalert2";
import ButtonRipple from "../../components/buttonRipple/buttonRipple";
import { insertEvent } from "../../services/events";
import './addEvent.css';

export default function AddEvent(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [culture, setCulture] = useState("sr");


    const [description, setDescription] = useState("");

    const handleClick = ()=> {
        const user = window.localStorage.getItem("currUser");
        if(user){
            insertEvent({title: title, content: content,description:description, culture:culture, location:{country: country, city: city, address: address}})
            Swal.fire({
                title: 'Success',
                text: 'Event is added!',
                icon: 'success',
                background: '#000',
                color: '#fff',
                confirmButtonText: 'ok',
                confirmButtonColor: 'rgb(249 183 0)'
                })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Login first',
                icon: 'error',
                iconColor: '#ff0000',
                background: '#000',
                color: '#fff',
                confirmButtonText: 'try again',
                confirmButtonColor: 'rgb(249 183 0)'
                })
        }
    }
    
    return(
        <div className={'addEventMainContainer'}>
            <h2>ADD EVENT</h2>
            <Input className={'input'} color={'secondary'} placeholder={'title'} value={title} onChange={e=>setTitle(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'content'} value={content} onChange={e=>setContent(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'description'} value={description} onChange={e=>setDescription(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'address'} value={address} onChange={e=>setAddress(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'city'} value={city} onChange={e=>setCity(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'country'} value={country} onChange={e=>setCountry(e.target.value)}/>

            <ButtonRipple type="submit" onClick={handleClick} text={'ADD EVENT'} width={'60%'}/>
        </div>
    );
}