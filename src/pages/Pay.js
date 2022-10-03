import React from "react";
import Nav from "./Nav";

import { useDispatch, useSelector } from "react-redux";
import { PayWrapper } from "../styles/PayStyles";
import styled ,{css}from "styled-components";

const PayTopWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
font-size : 1.5rem;
width: 70%;
height: 3rem;
background: #FFFFFF;
border: 1px solid #00CCFF;
`
export const PayMainWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
font-size : 1.5rem;
width: 70%;
height: 3rem;
background: #FFFFFF;
border: 1px solid #00CCFF;
border-top : 0px;
`

export const PayItemWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
font-size : 2rem;
width: 70%;
background: #FFFFFF;
border: 1px solid #00CCFF;
border-top : 0px;
`
export const DivTest = styled.div`
${(props) =>
    props.Price &&
    css`
        border-bottom: 0.5px dotted #00CCFF ;

    `}
`
export const Name = styled.span`
font-size : 1rem;

`

export const Img = styled.img`
height: 4.5rem;
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
        <DivTest Img>
            <Img src={item.src} alt="X" />
        </DivTest>
        <DivTest Name>
            <Name>{item.name}</Name>
        </DivTest>
        <DivTest Price>
            <Name Price>{(item.price * item.amount).toLocaleString('ko-KR')} 원 </Name>
            <Name>{item.amount}개 </Name>
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
            <PayTopWrapper>
                결제 내역
            </PayTopWrapper>

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