import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handle } from "../modules/handle";
import DogMenuMain from "./DogMenuMain";
import Data from '../json/Dog.json'

function SearchBox({item}){
    return(
        <div>
            <p>
                {item.name}
            </p>
        </div>
    )
}
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
        <DogMenuMain category='dog' animal='dog'/>
    </div>
    <div>
        {word}
    </div>

    <div>
    <p> result : </p>
    {word === '' ? <p>X</p> 
        :
        Data.dog
            .filter(item => {
                return item.name.toLowerCase().includes(word)
            })
            .map(item => (
                <SearchBox item={item} key={item.id} /> 
            ))
        }
    </div>
    

    </div>
    )
        
}

export default Test