import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotWrapper = styled.div`

height: 10rem;
padding: 5rem 0 5rem 0rem;
text-align : center;
`
const Info = styled.div`
width: 100%;
`
const BuyButton = styled.button`
margin-top: 2rem;
width: 8rem;
height: 3rem;
background: #FFFFFF;
border-radius: 0.5rem;
box-shadow: 1px 1px 1px 1px #CCDDCC;

`
const StyledLink = styled(Link)`
text-decoration : none;
font-weight : 800;

`

 
function NotFoundCart(){
    return(
        <NotWrapper>
            <Info>
                장바구니의 상품을 담아주세요 !
            </Info>
            <BuyButton>
                <StyledLink to='/'>
                    주문하러 가기
                </StyledLink>
            </BuyButton>
        </NotWrapper>
    )
}

export default NotFoundCart