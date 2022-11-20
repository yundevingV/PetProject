import React from "react";
import Nav from "./Nav";
import styled ,{css} from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { decrement, deletion, increment } from "../modules/cart";
import NotFoundCart from "./NotFoundCart";

import Footer from './Footer'
import { FooterWrapper } from "../styles/FooterStyles";

const CartContainer = styled.div`
position: relative;
top:2rem;
height: 100vh;

`

const CartWrapper = styled.div`
position: relative;

`

const CartTable = styled.div`
position: relative;
top:5rem;
background-color: #FFFFFF;
width: 65%;
box-shadow: 1px 1px 2px 2px #CCDDCC;
border-radius: 0.5rem;
margin: 0 auto;
margin-bottom: 1rem;
display: block;
${(props) =>
    props.Total &&
    css`
        font-size : 1.5rem;
        box-shadow : 0 0 0 0;
        width : 65%;
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
        height: 80px;

    `}
${(props) =>
    props.Name &&
    css`
        display: inline-block;
        width : 40%;
        height: 80px;
        text-align : center;
        vertical-align : top;
    `}    
${(props) =>
    props.Price &&
    css`
        display: inline-block;
        width : 40%;
        height: 80px;
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
height: 80px;
padding : 0.5rem;
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
        text-align : center;
        background-color: #c90234;
        border: 2px solid #000000;
        border-radius: 2px;
        color : #FFFFFF;
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
const ButtonWrapper = styled.div`
padding : 0.5vh;
text-align : center;
`
const StyledLink = styled(Link)`
text-decoration :none;
color : #000000;
`

export const P = styled.p`
color : #FFFFFF;
`



function CartList({item}){
    const dispatch = useDispatch()
    // amount -> number
    console.log(item)
    return (
        <>
            
            <CartListTableName Img>
                <StyledLink to={`/OrderPage/${item.animal}/${item.id}`}> 
                    <Img src={item.src} alt="X" />
                </StyledLink>

            </CartListTableName>
            <CartListTableName Name>
                <StyledLink to={`/OrderPage/${item.animal}/${item.id}`}>
                    <Name>{item.name}</Name>
                </StyledLink>
            </CartListTableName>
            <CartListTableName Price>
                <Name Price>{(item.price * item.amount).toLocaleString('ko-KR')} 원 </Name>
                
                <ButtonWrapper>
                    <Button onClick={()=>{dispatch(increment(item))}}> + </Button>
                    <Name>{item.amount}개 </Name>
                    <Button onClick={()=>{dispatch(decrement(item))}}> - </Button>
                </ButtonWrapper>

                <ButtonWrapper>
                    <Button 딜리트 onClick={()=>{dispatch(deletion(item))}}> 삭제 </Button>
                </ButtonWrapper>
            </CartListTableName>
            

        </>
    )
}

function Cart(){
    const list = useSelector((state) => state.cart.list)
    
    const total = useSelector((state) => state.cart.total)

    return(
        <>
        <Nav />
        
        <CartContainer>
                <CartWrapper>
                    {total > 0 ?
                    <CartTable>
                        <CartTableName Img>
                            상품 사진
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
        <FooterWrapper>
            <Footer />
        </FooterWrapper>
        

        </>
    )
}

export default Cart