import React from "react";
import Nav from "./Nav";
import styled ,{css} from "styled-components";

import Dog from '../json/Dog.json'



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
        width : 33%;
    `}
${(props) =>
    props.Name &&
    css`
        display: inline-block;
        width : 33%;
        text-align : center;
        vertical-align : top;
    `}    
${(props) =>
    props.Price &&
    css`
        display: inline-block;
        width : 33%;
        text-align : center;
        vertical-align : top;

    `}    
`

const Img = styled.img`
height: 70px;
`
const Name = styled.span`
font-size: 0.85rem;
`

const Hr = styled.hr`
border-top : 1px dotted #bbb;
`

const ResultWrapper = styled.div`

`

const Result = styled.div`

`
function CartList({item}){
    console.log(item.src)
    return (
        <>
            <CartListTableName Img>
                <Img src={item.src} alt="X" />
            </CartListTableName>
            <CartListTableName Name>
                <Name>{item.name}</Name>
            </CartListTableName>
            <CartListTableName Price>
                <Name>{item.price}</Name>
            </CartListTableName>
            <Hr />
        </>
    )
}

function Cart(){
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
                    {Dog.dog
                        .map(item =>(
                            <CartList item={item} key={item.id} />
                    ))}
                    </CartTable>
                </CartWrapper>
                
                <ResultWrapper>
                    <Result>

                    </Result>
                </ResultWrapper>
        </CartContainer>
    )
}

export default Cart