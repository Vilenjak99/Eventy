import {Input} from "@material-ui/core";
import ButtonRipple from "../../components/buttonRipple/buttonRipple";


export default function AddEvent(){
    const google = window.google;
    const onButtonClick = ()=> {
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
            <Input color={'secondary'} placeholder={'title'}/>
            <Input color={'secondary'} placeholder={'content'}/>
            <Input id = "location" color={'secondary'} placeholder={'location'} type={''}/>
            <ButtonRipple onClick={onButtonClick} text={'ADD EVENT'} width={'60%'}/>
        </div>
    );
}