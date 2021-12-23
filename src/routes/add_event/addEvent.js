import {Input} from "@material-ui/core";
import { useState } from "react";
import ButtonRipple from "../../components/buttonRipple/buttonRipple";
import { insertEvent } from "../../services/events";
import './addEvent.css';

export default function AddEvent(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = ()=> {
        insertEvent({title: title, content: content, culture:location})
    }
    
    return(
        <div className={'addEventMainContainer'}>
            <h2>ADD EVENT</h2>
            <Input className={'input'} color={'secondary'} placeholder={'title'} value={title} onChange={e=>setTitle(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'content'} value={content} onChange={e=>setContent(e.target.value)}/>
            <Input className={'input'} color={'secondary'} placeholder={'description'} value={description} onChange={e=>setDescription(e.target.value)}/>
            <Input className={'input'} id = "location" color={'secondary'} placeholder={'location'} value={location} onChange={e=>setLocation(e.target.value)}/>
            <ButtonRipple type="submit" onClick={handleClick} text={'ADD EVENT'} width={'60%'}/>
        </div>
    );
}