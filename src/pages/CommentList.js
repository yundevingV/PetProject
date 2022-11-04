import React ,{useState , useEffect} from "react";

import {Img} from '../styles/CommentStyles'

function CommentList({item}){


    return(

        <>
            <hr />
            <p>{item.userId}</p>

            {item.img.map(index => <Img src={index} /> ) }

            <p>{item.content}</p>
        </> 
    )
}

export default CommentList