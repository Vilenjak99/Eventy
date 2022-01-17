import './event.scss';
import {Button} from "@material-ui/core";
import {AddComment, KeyboardArrowDown, KeyboardArrowUp, LocationOn} from '@material-ui/icons';
import {useEffect, useState} from "react";
import {getEventBySlug} from "../../services/events";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { visit } from '../../services/user_event';
import { getAllCommentsByEventId, insertComment } from '../../services/comments';
import { formatDate} from '../../services/formatDate';

import Comment from '../../components/comment/comment';
import WriteComment from '../../components/comment/writeComment';


function Event(){
    const [event, setEvent] = useState({});
    const [comments, setComments] = useState([])
    const [numOfComments, setNumOfComments] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [addComment, setAddComment] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const location = useLocation();

    useEffect(() => {
        if(location.state){
            let {ev} = location.state;
            setEvent(ev)
            getAllCommentsByEventId(ev.id).then(comments => {
                let rootComments = comments.filter(comment => !comment.parentComment)
                let replies = comments.filter(comment => comment.parentComment)
                setComments(rootComments); 
                setNumOfComments(rootComments.length)})
        }else{
            const queryParams = new URLSearchParams(window.location.search);
            const slug = queryParams.get('slug');
            getEventBySlug(slug).then(item => {
                setEvent(item);
                visit(item,localStorage.getItem("currUser"));
                getAllCommentsByEventId(item.id).then(comments => {
                    let rootComments = comments.filter(comment => !comment.parentComment)
                    setComments(rootComments); 
                    setNumOfComments(rootComments.length)})
            })
        }
        
    }, [numOfComments])


    const handleSend = () => {
        setNumOfComments(numOfComments + 1)
    }

    const textField = (addComment) => {
        return (addComment ? <WriteComment handleSend={handleSend} event={event} addComment={addComment} setAddComment={setAddComment}/> : null)
    }

    const displayComments = (comments) =>{
    
        const display = (smth) => {
            return smth.map(comment => {
                    return(
                        <Comment comment={comment} event={event} key={comment.id}/>
                        )
            
            });
        }

        return(showComments ? display(comments) : null)
    }

    
    return(
        <div className="containerr">
            <div className={'eventGrid'}>
                <div className={'leftSection'}>
                    <img alt='event' className={'eventImage'} src={'images/food-festival.webp'}  />
                    <Button startIcon={<LocationOn/>} variant={'contained'} className={'eventActionBtn'}>{event?.eventLocalization?.location.city}, {event?.eventLocalization?.location.address}</Button>
                </div>
                <div className={'rightSection'}>
                    <div className={'rightTopSection'}>
                        {event?.eventLocalization?.title}
                    </div>
                    <div className={'rightMiddleSection'}>
                        {event?.eventLocalization?.content}
                    </div> 
                    <div className={'rightBottomSection'}>
                        <p>{formatDate(new Date(Date.parse(event?.dateCreated)))}</p>
                    </div>
                </div>
            </div>
            <div className="commentFlex">
                <div className='commentsHeader'>
                <Button className="hoverColor" color={"primary"} onClick={() => setShowComments(!showComments)}>{showComments ? <span className='commentSpan'><KeyboardArrowDown/> Hide Comments </span>: <span className='commentSpan'><KeyboardArrowUp/> Show {numOfComments} Comments</span>}</Button>
                <Button className="hoverColor" color={"primary"} onClick={()=> setAddComment(!addComment)}><span className='commentSpan'>Add Comment  <AddComment/></span></Button>
                </div>
                {textField(addComment)}{console.log(addComment)}
                {displayComments(comments)}
            </div>
        </div>
        
    );
}
export default Event;