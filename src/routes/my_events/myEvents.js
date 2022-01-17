import { useEffect, useState } from "react"
import EventCard from "../../components/event_card/eventCard";
import { getEventsByAuthor } from "../../services/events";

export default function MyEvents(){
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        let author = window.localStorage.getItem("currUser");
        console.log(JSON.parse(author))
        getEventsByAuthor(JSON.parse(author))
            .then(item => {
                setMyEvents(item)
                console.log(item)
            });
    }, [])

    function displayEvents(events){
        return events.map(e=>{
            return (<div className="card_container" key={e?.eventLocalization?.title}> <EventCard event={e} ownEventCard={true}/> </div>)
        });
    }

    return(
        <div className="container">
            <div className="own-events-container">
                {displayEvents(myEvents)}
            </div>
        </div>
    )
}