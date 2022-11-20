import React  from "react";

import {Img} from '../styles/CommentStyles'
import { useDispatch ,useSelector} from "react-redux";
import { deleteComment, likeComment } from "../modules/comment";

import {Span,RecommendButton,DeleteButton,Hr} from '../styles/CommentStyles'

function CommentList({item}){
    const dispatch = useDispatch()

    const userId = useSelector((state) => state.login.id)

    return(

        <>
            
            <Span UserId>{item.name} ({item.userId})
                <RecommendButton onClick={()=>dispatch(likeComment(userId,item.commentId))}>
                    ❤ {item.like}
                </RecommendButton>
                <DeleteButton onClick={()=>dispatch(deleteComment(item))}>
                    X
                </DeleteButton>

            </Span>

            {item.img.map(index => <Img src={index} /> ) }

            <Span Content>{item.content}</Span>
            <Hr />

            
        </> 
    )
}

export default CommentList