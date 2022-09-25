import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement  } from "../modules/amount";
import {add} from "../modules/cart"

function Test(){
    const amount = useSelector((state) => state.amount.amount)

    const dispatch = useDispatch()
    const list = useSelector((state) => state.cart.list)

    return(
        <div>
            <div>            
            <button onClick={()=>{dispatch(increment())}}> + ++</button>
        
            <button onClick={()=>{dispatch(decrement())}}> ---</button>
            {amount}

            <button onClick={()=>{dispatch
                    (add('id','name','price','amount','src','categoey'))}}>
                        add</button>
            <div>
            {list.map((lst) => {
                return(
                    <div>
                        <h2> id : {lst.id} </h2>
                        <h2> name : {lst.name} </h2>
                        <h2> price : {lst.price} </h2>
                        
                        <h2> amount : {lst.amount} </h2>
                        <h2> src : {lst.src} </h2>
                        <h2> category : {lst.category} </h2>

                    </div>
                )
            })}
            
            </div>

            </div>

        </div>
    )
}

export default Test