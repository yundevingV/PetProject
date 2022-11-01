import React from "react";

import {Img} from '../styles/CommentStyles'

function CommentList({item,index}){

    return(

        <>
            <hr />
            <p>{item.userId}</p>
            
            <p>{item.content}</p>
            <p><Img src={item.img[index]} /></p>
        </> 
    )
}

export default CommentList