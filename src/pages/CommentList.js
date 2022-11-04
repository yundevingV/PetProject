import React ,{useState , useEffect} from "react";

import {Img} from '../styles/CommentStyles'

function CommentList({item,index}){
    const [num,setNum] = useState(index)

    return(

        <>
            <hr />
            <p>{item.userId} <button onClick={()=>{disaptch(deleteComment())}}>삭제</button></p>

            {item.img.map(index => <Img src={index} /> ) }

            <span>{item.content}</span>


            
        </> 
    )
}

export default CommentList