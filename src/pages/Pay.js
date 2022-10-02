import React from "react";
import Nav from "./Nav";

import { useDispatch, useSelector } from "react-redux";
import { PayWrapper } from "../styles/PayStyles";
import styled from "styled-components";

const PayTopWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
font-size : 2rem;
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
font-size : 2rem;
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

`
export const Name = styled.span`
font-size : 1.5rem;
`
export const Button = styled.button`
`
export const Img = styled.img`
height: 4.5rem;
float : left;
`
export const PayResultWrapper = styled.div`
margin: 0 auto;
position: relative;
top : 5rem;
text-align : center;
font-size : 2rem;
width: 70%;
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
            <Name Price>{item.price * item.amount} 원 </Name>
            <Name>{item.amount}개 </Name>
        </DivTest>
    </>

    )
}
function Pay() {
    const dispatch = useDispatch()

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

                <Button>
                    결제하기
                </Button>

            </PayResultWrapper>
        </PayWrapper>
    )
}

export default Pay