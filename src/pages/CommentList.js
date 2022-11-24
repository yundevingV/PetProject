import React  from "react";

import {Img} from '../styles/CommentStyles'
import { useDispatch ,useSelector} from "react-redux";
import { deleteComment, likeComment } from "../modules/comment";

import {P,Span,RecommendButton,DeleteButton,Hr} from '../styles/CommentStyles'

function CommentList({item}){
    const dispatch = useDispatch()

    const userId = useSelector((state) => state.login.id)

    let replaceAt = function(input, index, character){
        return input.substr(0, index) + character + input.substr(index+character.length);
   }
   
   let changeName = replaceAt(item.name, 1, '*');

    return(

        <>
            
            <Span UserId>{changeName}({item.userId})
                <RecommendButton onClick={()=>dispatch(likeComment(userId,item.commentId))}>

                    {item.likeStatus.includes(userId) ? <Span>❤</Span> : <Span>♡</Span>} {item.like}
                
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