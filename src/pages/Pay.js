import React from "react";
import Nav from "./Nav";

import { useDispatch, useSelector } from "react-redux";
import { PayWrapper } from "../styles/PayStyles";
import styled ,{css}from "styled-components";

// const PayTopWrapper = styled.div`
// margin: 0 auto;
// position: relative;
// top : 5rem;
// text-align : center;
// font-size : 1.5rem;
// width: 70%;
// height: 3rem;
// background: #FFFFFF;
// `

export const PayMainWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : left;
font-size : 1rem;
width: 70%;
height: 3rem;
background: #FFFFFF;
border-top : 0px;
`

export const PayItemWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
width: 70%;
background: #ddd;
height: auto;

`
export const DivTest = styled.div`
${(props) =>
    props.Name &&
    css`
        display: block;
        text-align:left;
    `}

${(props) =>
    props.Img &&
    css`
        display: inline-block;
        float: left;
    `}

${(props) =>
    props.Info &&
    css`
        display: inline-block;
        height: 5rem;
    `}
`
export const Name = styled.span`
${(props) =>
    props.Name &&
    css`
        font-size:1rem;
    `}
${(props) =>
    props.Price &&
    css`
        font-size:1.4rem;
    `}
${(props) =>
    props.Amount &&
    css`
        font-size:1.4rem;
    `}
`

export const Img = styled.img`
height: 5rem;
float : left;
`
export const PayResultWrapper = styled.div`
margin: 0 auto;
position: fixed;
bottom : 0rem;
font-size : 2rem;
width: 100%;
border-top: 1px solid #000000;
`
export const Span = styled.span`
font-size : 1.5rem;
padding : 2rem;
`
export const Button = styled.button`
background-color: #00CCFF;
border: 2px solid white;
color : white;
width: 10rem;
height: 3rem;
font-weight:700;
font-size:1.2rem;
float: right;
`

function CartList({item}){
    
    return(
    <>
        <DivTest Name>
            <Name name>{item.name}</Name>
        </DivTest>
        <hr />

        <DivTest Img>
            <Img src={item.src} alt="X" />
        </DivTest>
        
        <DivTest Info>
            <Name Price>{(item.price * item.amount).toLocaleString('ko-KR')}</Name>원
            <Name Amount>{item.amount}</Name>개 
        </DivTest>
        
    </>

    )
}
function Pay() {

    const list = useSelector((state) => state.cart.list)
    const total = useSelector((state) => state.cart.total)

    return(
        <PayWrapper>
            <Nav />

            <PayMainWrapper>
                상품 정보
            </PayMainWrapper>
            <PayItemWrapper>
                {list.map(item =>(
                                <CartList item={item} key={item.id} />
                            ))}
            </PayItemWrapper>
            <PayResultWrapper>
                <Span>결제하실 금액 : {total.toLocaleString('ko-KR')}</Span>

                <Button>
                    결제하기
                </Button>

            </PayResultWrapper>

        </PayWrapper>
    )
}

export default Pay