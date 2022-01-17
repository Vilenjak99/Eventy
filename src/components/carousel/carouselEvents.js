import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { getEvents } from "../../services/events";
import EventCard from "../event_card/eventCard";
import "./carousel.css"

export default function CarouselEvents(){
    const [event, setEvent] = useState([]);

    useEffect(() => {
        getEvents()
            .then(item => {
                setEvent(item)
            });
    }, [])

    function displayEvents(events){
        return events.map(e=>{
            return (<div className="card_container" key={e?.eventLocalization?.title}> <EventCard event={e}/> </div>)
        });
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
      <div id="carouselContainer">
      <Carousel swipeable={false}
      draggable={true}
      minimumTouchDrag={100}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="transform 600ms ease-in-out"
      transitionDuration={600}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
        {displayEvents(event)}
      </Carousel>
      </div>
      )
}