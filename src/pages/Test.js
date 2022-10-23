import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handle } from "../modules/handle";
import DogMenuMain from "./DogMenuMain";

function Test(){
    const word = useSelector((state) => state.handle.word)

    const dispatch = useDispatch()
    return(
    <div>
    
    <input 
        type='text' 
        placeholder='검색어를 입력하세요 ...'
        onChange={(event)=> dispatch(handle(event.target.value))}
        value ={word}
        >
    </input>
    
    <button >
        검색하기
    </button>

    <div>
        {word }
        <DogMenuMain category='dog' animal='dog'/>
    </div>


    {word}

    </div>
    )
        
}

export default Test