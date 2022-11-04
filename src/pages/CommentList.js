import React ,{useState , useEffect} from "react";

import {Img} from '../styles/CommentStyles'
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../modules/comment";

import {DeleteButton} from '../styles/CommentStyles'

function CommentList({item,index}){
    const [num,setNum] = useState(index)
    const dispatch = useDispatch()

    return(

        <>
            <hr />
            <p>{item.userId}
                <DeleteButton onClick={()=>dispatch(deleteComment())}>
                        X
                </DeleteButton>

            </p>

            {item.img.map(index => <Img src={index} /> ) }

            <span>{item.content}</span>


            
        </> 
    )
}

export default CommentList