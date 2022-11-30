import React, {useEffect, useState} from 'react';
import { Button, Input } from "antd"; 
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext.js";
import axios from "../../utils/axios.js";
import SingleComment from './SingleComment.jsx';
import ReplyComment from './ReplyComment.jsx';

const { TextArea } = Input; 

function Comments(props) {

    const [TotalCommentNumber, setTotalCommentNumber] = useState(0)
    const [OpenComments, setOpenComments] = useState(false)

    useEffect(() => {
        let commentNumber = 0;
        props.CommentLists.map(() => {
            commentNumber++
        })
        setTotalCommentNumber(commentNumber)
    }, [props.CommentLists])

    const { authState } = useContext(AuthContext);
    //const currentUserId = authState.userId;

    const [Comment, setComment] = useState("") 
    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            content: Comment,
            user: authState.userId,
            post: props.postId
        }

        axios.post('api/comments/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    // setting the value of text area input to empty string
                   setComment("")
                   // update saved data into Parent component Post.jsx using props which we call refreshFunction
                   // in the brackets we put the new comment value
                   props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

// {props.CommentLists &&
            let renderAllComments = () =>
             props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                         {/* passing comment as a props to SingleComment. Update saved data into parent component using props.refreshFunction   */}
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists}  postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction}/> 
                    </React.Fragment>
                )
            ))
        
        // }  

        const handleOpenComments = () => {
            setOpenComments(!OpenComments)
        }

    return (
        <div>
            <br />
            <p onClick={handleOpenComments}> Comments ({TotalCommentNumber})</p>
            <hr />

            
            {OpenComments &&
                renderAllComments()
            }

            {/* Comment Lists  */}

             {/* {console.log("props Comments", props.CommentLists)} */}

            {/* if(OpenComments) */}

            {/* {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                         passing comment as a props to SingleComment. Update saved data into parent component using props.refreshFunction  
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists}  postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction}/> 
                    </React.Fragment>
                )
            ))}  */}
            


            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write your comment"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comments