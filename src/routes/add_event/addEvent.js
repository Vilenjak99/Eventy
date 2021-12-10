import {Input} from "@material-ui/core";
import { useState } from "react";
import ButtonRipple from "../../components/buttonRipple/buttonRipple";
import { insertEvent } from "../../services/events";


export default function AddEvent(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");


    const google = window.google;
    const handleClick = ()=> {
        insertEvent({title: title, content: content, culture:location})
    }
    let autocomplete;
    function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('location'),
            {
                types: ['establishment'],
                componentRestrictions: {country: ["AU"]},
                fields: ['place_id', 'geometry', 'name']
            });
        autocomplete.addListener('place_changed', onPlaceChanged);
    }
    function onPlaceChanged(){

    }
    return(
        <div className={'authMainContainer'}>
            <h2>ADD EVENT</h2>
            <Input color={'secondary'} placeholder={'title'} value={title} onChange={e=>setTitle(e.target.value)}/>
            <Input color={'secondary'} placeholder={'content'} value={content} onChange={e=>setContent(e.target.value)}/>
            <Input color={'secondary'} placeholder={'description'} value={description} onChange={e=>setDescription(e.target.value)}/>
            <Input id = "location" color={'secondary'} placeholder={'location'} value={location} onChange={e=>setLocation(e.target.value)}/>
            <ButtonRipple type="submit" onClick={handleClick} text={'ADD EVENT'} width={'60%'}/>
        </div>
    );
}