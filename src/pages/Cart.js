import React from "react";
import Nav from "./Nav";
import styled ,{css} from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { decrement, deletion, increment } from "../modules/cart";
import NotFoundCart from "./NotFountCart";


const CartContainer = styled.div`
position: relative;
`

const CartWrapper = styled.div`
position: relative;


`

const CartTable = styled.div`
position: relative;
top:5rem;
background-color: #FFFFFF;
width: 70%;
box-shadow: 1px 1px 5px 5px #CCDDCC;
border-radius: 1rem;
margin: 0 auto;
margin-bottom: 1rem;
display: block;
${(props) =>
    props.Total &&
    css`
        font-size : 1.5rem;
        box-shadow : 0 0 0 0;
        width : 70%;
    `}

`

const CartTableName = styled.div`
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
    `}    
${(props) =>
    props.Price &&
    css`
        display: inline-block;
        width : 40%;
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
${(props) =>
    props.total &&
    css`
        width: 100%;
        text-align : center;
    `}  

${(props) =>
    props.pay &&
    css`
        width: 100%;
        text-align : center;
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
${(props) =>
    props.pay &&
    css`
        display: inline-block;
        background-color: #00CCFF;
        border: 2px solid white;
        color : white;
        width: 10rem;
        height: 3rem;
    `} 

`
const StyledLink = styled(Link)`
text-decoration :none;
`

export const P = styled.p`
color : #FFFFFF;
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
                <Name Price>{(item.price * item.amount).toLocaleString('ko-KR')} 원 </Name>
                <Button 플러스 onClick={()=>{dispatch(increment(item))}}> + </Button>
                <Name>{item.amount}개 </Name>
                <Button onClick={()=>{dispatch(decrement(item))}}> - </Button>

                <Button 딜리트 onClick={()=>{dispatch(deletion(item))}}> 삭제 </Button>
            </CartListTableName>
            <hr />

        </>
    )
}

function Cart(){
    const list = useSelector((state) => state.cart.list)
    
    const total = useSelector((state) => state.cart.total)

    return(

        <CartContainer>
            <Nav />
                <CartWrapper>
                    {total > 0 ?
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

                    </CartTable>
                    : <> </>
                    }
                    {total > 0 ?
                    <>
                        <CartTable>
                        
                        {list.map(item =>(
                                <CartList item={item} key={item.id} />
                        ))}
                        </CartTable>
                        
                        <CartTable Total>
                            <CartListTableName total>
                                가격 : {total.toLocaleString('ko-KR')}
                            </CartListTableName>
                            <CartListTableName pay>
                                <Button pay>
                                    <StyledLink to='/Pay'>
                                        <P>결제하기</P>
                                    </StyledLink>
                                </Button>
                            </CartListTableName>
                            
                        </CartTable>

                    
                    </>                    
                    :
                    <>
                        <CartTable not>
                            <NotFoundCart />
                        </CartTable>
                    </>
                    }


                </CartWrapper>
        </CartContainer>
    )
}

export default Cart