import React from "react";

import {Img} from '../styles/CommentStyles'

function CommentList({item,index}){

    return(

        <>
            <hr />
            <p>{item.userId}</p>
            
            <p>{item.content}</p>
            {item.img.map(index => <Img src={index} /> ) }
            
        </> 
    )
}

export default CommentList