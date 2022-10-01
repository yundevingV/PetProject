import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cat, dogCategory, catCategory, dog} from '../modules/category'

function Test(){
    
    const animal = useSelector((state) => state.category.animalState)
    const category = useSelector((state) => state.category.categoryState)
    const dispatch = useDispatch()
    
    return(
    <div>
    <button
        onClick={()=>{dispatch(dog('food'))}}>
    </button>
    <button
        onClick={()=>{dispatch(dogCategory('food'))}}>
    </button>
    <button
        onClick={()=>{dispatch(cat('food'))}}>
    </button>
    <button
        onClick={()=>{dispatch(catCategory('food'))}}>
    </button>

        <p>{category}</p>
        <p>{animal}</p>

    </div>
    )
        
}

export default Test