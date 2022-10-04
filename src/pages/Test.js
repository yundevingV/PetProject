import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cat, dogCategory, catCategory, dog} from '../modules/category'
import Footer from "./Footer";

function Test(){
    
    const animal = useSelector((state) => state.category.animalState)
    const category = useSelector((state) => state.category.categoryState)
    const dispatch = useDispatch()
    
    return(
    <div>
        <Footer />

    </div>
    )
        
}

export default Test