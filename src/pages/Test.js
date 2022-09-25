import React from "react";
import {useLocation} from 'react-router-dom'

function Test({cart}){
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <p>{location.state.cart[0].id}</p>
            <p>{location.state.cart[0].price}</p>
            <p>{location.state.cart[0].amount}</p>
            <p>{location.state.cart[0].image}</p>
        </div>
    )
}

export default Test