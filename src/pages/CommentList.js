import React  from "react";

import {Img} from '../styles/CommentStyles'
import { useDispatch } from "react-redux";
import { deleteComment } from "../modules/comment";

import {P,DeleteButton,Hr} from '../styles/CommentStyles'

function CommentList({item}){
    const dispatch = useDispatch()

    return(

        <>
            
            <P UserId>{item.userId}
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