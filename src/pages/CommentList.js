import React  from "react";

import {Img} from '../styles/CommentStyles'
import { useDispatch ,useSelector} from "react-redux";
import { deleteComment, likeComment } from "../modules/comment";

import {P,RecommendButton,DeleteButton,Hr} from '../styles/CommentStyles'

function CommentList({item}){
    const dispatch = useDispatch()
    
    console.log(item)
    console.log(item.commentId)
    return(

        <>
            
            <P UserId>{item.name} ({item.userId})
                <RecommendButton onClick={()=>dispatch(likeComment(item.commentId))}>
                    ❤ {item.like}
                </RecommendButton>
                <DeleteButton onClick={()=>dispatch(deleteComment(item))}>
                    X
                </DeleteButton>

            </P>

            {item.img.map(index => <Img src={index} /> ) }

            <P Content>{item.content}</P>
            <Hr />

            
        </> 
    )
}

export default CommentList