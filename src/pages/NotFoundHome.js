import React from "react";
import styled from "styled-components";


const NotWrapper = styled.div`
height: 10rem;
padding: 5rem 0 5rem 0rem;
text-align : center;
background: #000000;
`

const Info = styled.div`
width: 100vh;
`




function NotFoundHome(){
    return(
        <NotWrapper>
            <Info>
                죄송합니다 상품 준비 중입니다 ..!
            </Info>
        </NotWrapper>
    )
}

export default NotFoundHome