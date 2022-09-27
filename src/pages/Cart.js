import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import styled ,{css} from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../modules/amount";


const CartContainer = styled.div`
position: relative;
`

const CartWrapper = styled.div`
position: relative;


`

const CartTable = styled.div`
position: inherit;
top:5rem;
background-color: antiquewhite;
width: 70%;

margin: 0 auto;
`

const CartTableName = styled.div`
${(props) =>
    props.Img &&
    css`
        display: inline-block;
        width : 33%;
    `}
${(props) =>
    props.Name &&
    css`
        display: inline-block;
        width : 33%;
        text-align : center;
    `}    
${(props) =>
    props.Price &&
    css`
        display: inline-block;
        width : 33%;
        text-align : center;
    `}    
`

const CartListTableName = styled.div`
${(props) =>
    props.Img &&
    css`
        display: inline-block;
        width : 20%;
    `}
${(props) =>
    props.Name &&
    css`
        display: inline-block;
        width : 40%;
        text-align : center;
        vertical-align : top;
    `}    
${(props) =>
    props.Price &&
    css`
        display: inline-block;
        width : 40%;
        text-align : center;
        vertical-align : top;

    `}    
`

const Img = styled.img`
height: 70px;
`
const Name = styled.span`
font-size: 0.85rem;
${(props) =>
    props.Price &&
    css`
        width : 100%;
        display: block;
    `}    
`
const Button = styled.button`

background-color: black;
color : white;
${(props) =>
    props.딜리트 &&
    css`
        display: inline-block;
        background-color: aliceblue;
        border: 2px solid blue;
        border-radius: 5px;
        color : black;
    `} 


`

const Hr = styled.hr`
border-top : 1px dotted #bbb;
`

const Hr1 = styled.hr`
border-top : 0.1px dotted #bbb;
`
const Result = styled.span`
font-weight : 1000;
`

function CartList({item}){
    const dispatch = useDispatch()
    

    return (
        <>
            <CartListTableName Img>
                <Img src={item.src} alt="X" />
            </CartListTableName>
            <CartListTableName Name>
                <Name>{item.name}</Name>
            </CartListTableName>
            <CartListTableName Price>
                <Name Price>{item.price} 원 </Name>
                <Button 플러스 onClick={()=>{dispatch(increment(item.name))}}> + </Button>
                <Name>{item.amount}개 </Name>
                <Button onClick={()=>{dispatch(decrement())}}> - </Button>
                <Hr1 />
                <Button 딜리트 onClick={()=>decrement()}> 삭제 </Button>
            </CartListTableName>

            <Hr />
        </>
    )
}

function Cart(){
    const list = useSelector((state) => state.cart.list)
    

    return(
        <CartContainer>
            <Nav />
                <CartWrapper>
                    <CartTable>
                        <CartTableName Img>
                            상품사진
                        </CartTableName>
                        <CartTableName Name>
                            상품 이름
                        </CartTableName>
                        <CartTableName Price>
                            상품 가격
                        </CartTableName>
                        <Hr />
                    </CartTable>
                    
                    <CartTable>
                    
                    {list.map(item =>(
                            <CartList item={item} key={item.id} />
                    ))}
                    </CartTable>

                    <CartTable>
                        가격 : {list.price}
                    </CartTable>


                </CartWrapper>
        </CartContainer>
    )
}

export default Cart