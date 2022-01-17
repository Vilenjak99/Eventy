import { formatDate} from '../../services/formatDate';
import {ThumbUpAltOutlined, ThumbUpAlt, ThumbDownAlt, KeyboardArrowUp, ThumbDownAltOutlined, KeyboardArrowDown} from '@material-ui/icons';
import './comment.scss';
import { findLikesForCommentByLikeType, insertLike, updateLike, existsLikeByCommentIdAndUserId} from '../../services/likeService';
import { getAllCommentsByParentCommentId } from '../../services/comments';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@material-ui/core';
import WriteComment from './writeComment';

export default function Comment(props){
    const [userId, setUserId] = useState(null)
    const [replies, setReplies] = useState([])
    const [numOfReplies, setNumOfReplies] = useState(0);
    const [addReply, setAddReply] = useState(false);
    const [choosenReaction, setChoosenReaction] = useState(null);
    const [numOfLikes, setNumOfLikes] = useState(0);
    const [numOfDisikes, setNumOfDislikes] = useState(0);
    const [showReplies, setShowReplies] = useState(false)
    


    useEffect(() => {
        if(localStorage.getItem("currUser")){
            setUserId(JSON.parse(localStorage.getItem("currUser")).id)

            existsLikeByCommentIdAndUserId(props.comment.id, JSON.parse(localStorage.getItem("currUser")).id).then(like => {
                setChoosenReaction(like);
                console.log(like)
            });
        }
      }, []);


    useEffect(() => {
        console.log("asdf")
        getAllCommentsByParentCommentId(props.comment.id).then(replies => setReplies(replies))
        findLikesForCommentByLikeType(props.comment.id, "LIKE").then(likes => setNumOfLikes(likes.length));
        findLikesForCommentByLikeType(props.comment.id, "DISLIKE").then(likes => setNumOfDislikes(likes.length));
    }, [choosenReaction])

    const displayReplies = (replies) =>{
        const display = (smth) => {

            return smth.map(comment => {
                    return(
                        <Comment comment={comment} event={props.event} key={comment.id}/>
                        )
            });
        }
        return(showReplies ? display(replies) : null)
    }

    const handleSend = () => {
        setNumOfReplies(numOfReplies + 1)
    }

    function handleLike(comment){
        if(userId){
            if(choosenReaction){
                choosenReaction.likeType = "LIKE"   
                updateLike(choosenReaction).then(like=>setChoosenReaction(like))
            }else{
                insertLike("LIKE", userId, comment.id ).then(like=>setChoosenReaction(like))
        }
        }
        
    }

    function handleDislike(comment){
        if(userId){
            if(choosenReaction){   
                choosenReaction.likeType = "DISLIKE"   
                updateLike(choosenReaction).then(like=>setChoosenReaction(like))
            }else{
                insertLike("DISLIKE", userId, comment.id ).then(like=>setChoosenReaction(like))
            }
        }
    }

    function handleReplyClick(addReply){
        if(userId){
            setAddReply(!addReply)
        }
    }

    return(              
    props.comment ? 
    <div className='commentDiv'>
        <img alt='event' className={'userImg'} src={'images/food-festival.webp'}  />

        <div className='commentRight'>
            <div className='whoWhen'>
                <p>{props.comment.user.username}</p>
                <p>{formatDate(new Date(Date.parse(props.comment.date)))}</p> 
            </div>
            <div className='text'>
                <p>{props.comment.text}</p>
            </div>
            <div className='reactionDiv '>
                <div className='like' onClick={() => handleLike(props.comment)}>
                    {(choosenReaction?.likeType==="LIKE" ? <ThumbUpAlt className='hoverColor'/> : <ThumbUpAltOutlined className='hoverColor'/>)} {numOfLikes}
                </div>
                <div className='dislike' onClick={() => handleDislike(props.comment)}>
                {(choosenReaction?.likeType==="DISLIKE" ? <ThumbDownAlt className='hoverColor'/> : <ThumbDownAltOutlined className='hoverColor'/>)} {numOfDisikes}
                </div>
                <p className='reply hoverColor' onClick={()=> handleReplyClick()}>
                    REPLY
                </p>
            </div>
            {addReply ? <WriteComment handleSend={handleSend} event={props.event} addComment={addReply} setAddComment={setAddReply} parentComment={props.comment} /> : null}
            <div className='showReplies hoverColor'>
            <Button className="hoverColor" color={"primary"} onClick={() => setShowReplies(!showReplies)}>{showReplies ? <span className='commentSpan'><KeyboardArrowDown/> Hide Replies </span>: <span className='commentSpan'><KeyboardArrowUp/> Show {replies.length} Replies</span>}</Button>
            </div>
            <div className='replies'>
                {displayReplies(replies)}
            </div>
        </div>
    </div> 
    : null);
}