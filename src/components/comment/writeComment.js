import { Button } from '@material-ui/core';
import { useState } from 'react';
import { insertComment } from '../../services/comments';
import TextareaAutosize from 'react-textarea-autosize';
import './writeComment.scss';

export default function WriteComment(props){
    const [commentValue, setCommentValue] = useState("")


    const handleDiscard = () =>{
        props.setAddComment(false)
        setCommentValue("");
    }

    const handleSend = (commentValue) => {
        props.handleSend();
        console.log(props.parentComment)
        insertComment({eventId: props.event.id, user: JSON.parse(localStorage.getItem("currUser")), text: commentValue, date: new Date(), parentComment: props.parentComment});
        props.setAddComment(false)
        setCommentValue("");
    }
    return(
        props.addComment?
        <div className='writeCommentContainer'>
            <TextareaAutosize autoFocus className='writeCommentArea' value={commentValue} onChange={e=>setCommentValue(e.target.value)} />
            <div>
            <Button className="hoverColor" color={"primary"} onClick={()=> handleDiscard()}>DISCARD</Button>
            <Button className="hoverColor" color={"primary"} onClick={()=> handleSend(commentValue)}>SEND</Button>
            </div>
        </div> : null
    )
}