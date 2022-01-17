import { Button } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import { Link, Route } from "react-router-dom";
import { findLatestVisitForGivenParameters, findVisitByDate, visit } from "../../services/user_event";
import ButtonRipple from "../buttonRipple/buttonRipple";
import "./eventCard.scss";

export default function EventCard(props) {
    const  handleClick = ()=>{
        console.log("VISIT: " + findVisitByDate("2022-01-05 05:43:27.541Z"));
        //findLatestVisitForGivenParameters(props.event, localStorage.getItem("currUser"))
        visit(props.event,localStorage.getItem("currUser"))
    };

    const formatDate = (date) =>{
        return ('0' + date.getDate()).slice(-2) + '/'
        + ('0' + (date.getMonth()+1)).slice(-2) + '/'
        + date.getFullYear() + "  " + ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getHours()).slice(-2);
    }
    
    if(props.ownEventCard){
        return(
        <div className="grid-container own-card">
            <div id="img"/>
            <h2 id="title" aria-label="title">{props.event.eventLocalization.title}</h2>
            <h3 id="description">{props.event.eventLocalization.description}</h3>
            <p id="content">{props.event.eventLocalization.content}</p>
            <p id="date">{formatDate(new Date(Date.parse(props.event.dateCreated)))}</p>
            <Button startIcon={<LocationOn/>} variant={'contained'} className={'btn'}>{props.event.eventLocalization.location.city}, {props.event.eventLocalization.location.address}</Button>
            <Link id="link" to={{ pathname: `/event?slug=${props.event.slug}`,state: {ev: props.event}}} onClick={handleClick}>
                <p>Check details</p>
                <p id="arrow">&#8594;</p>
            </Link>
        </div>
        )
    }
    else{
        return (
            <div className="grid-container">
                <div id="img"/>
                <h2 id="title" aria-label="title">{props.event.eventLocalization.title}</h2>
                <h3 id="description">{props.event.eventLocalization.description}</h3>
                
                <Button startIcon={<LocationOn/>} variant={'contained'} className={'btn'}>{props.event.eventLocalization.location.city}, {props.event.eventLocalization.location.address}</Button>
                <Link id="link" to={{ pathname: `/event?slug=${props.event.slug}`,state: {ev: props.event}}} onClick={handleClick}>
                    <p>Check details</p>
                    <p id="arrow">&#8594;</p>
                </Link>
            </div>
        );
    }
}