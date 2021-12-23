import './event.css';
import {Button} from "@material-ui/core";
import {LocationOn} from '@material-ui/icons';
import {useEffect, useState} from "react";
import {getEventBySlug} from "../../services/events";
function Event(){
    const [event, setEvent] = useState();

    useEffect(() => {
        getEventBySlug("exit-festival")
            .then(item => {
                setEvent(item)
            });
    }, [])
    return(
        <div className={'container eventGrid'}>
            <div className={'leftSection'}>
                <img alt='event' className={'eventImage'} src={'images/food-festival.webp'}  />
                <Button startIcon={<LocationOn/>} variant={'contained'} className={'eventActionBtn'}>{event?.eventLocalization.location.address}</Button>
            </div>
            <div className={'rightSection'}>
                <div className={'rightTopSection'}>
                    {event?.eventLocalization.title}
                </div>
                <div className={'rightMiddleSection'}>
                    {event?.eventLocalization.content}
                </div>
                <div className={'rightBottomSection'}>
                    <p>{event?.dateCreated}</p>
                </div>
            </div>
        </div>
    );
}
export default Event;