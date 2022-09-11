import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import KakaoLogin from '../img/KakaoLoginImg.png'

const ContainerWrapper = styled.div`
`
const Container = styled.div`
width : 50%;
height : 20%;
margin : 0 auto;
margin-top : 7rem ;
`

const Title = styled.div`
font-weight : bold;
text-align : center;
font-size : 3rem;
padding-bottom: 3rem;
`

const Input = styled.input`
display : block;
width : 500px;
height: 50px;

::placeholder {
    font-weight : bold;
    font-size : 1rem;
}
`

const SubmitButton = styled.button`
display : block;
width : 508px;
height : 50px;

background : #FFFFFF;
&:hover {
    background : blue;
    color : #FFFFFF;
    transition: 0.3s;
}
`

const SubmitButtonFont = styled.span`
font-weight : bold;
font-size : 1.5rem;
padding: 1rem;
`

/*회원가입, 아이디찾기, 비밀번호찾기 */
const ServiceMenu = styled.div`
width : 508px;

`
const StyledLink = styled(Link)`
text-decoration : none;
color : #000000;
margin-right : ${(props) => props.space};

&:hover {
    color : blue;
}
`

const Wrapper = styled.div`
display: inline-block;
text-align : ${(props) => props.textAlign};
margin-bottom : ${(props) => props.marginBottom};

`
function Login(){
    return(
    <ContainerWrapper>
        <Container>
            <Title>
                Pet Project
            </Title>
            <Wrapper marginBottom='1rem'>
                <Input placeholder='아이디'> 
                </Input>
            </Wrapper>

            <Wrapper marginBottom='1rem'>
                <Input marginBottom='3rem' placeholder='비밀번호'>
                </Input>
            </Wrapper>

            <Wrapper marginBottom='0.3rem'>
                <SubmitButton>
                    <SubmitButtonFont>
                        로그인하기
                    </SubmitButtonFont>
                </SubmitButton>
            </Wrapper>

            <Wrapper  textAlign='left' marginBottom='5rem'>
                <ServiceMenu>
                    <StyledLink to='/join' space='1rem'>
                        회원 가입
                    </StyledLink>
                    <StyledLink to='/findid' space='1rem'>
                        아이디 찾기
                    </StyledLink>
                    <StyledLink to='/findpass' space='1rem'>
                        비밀번호찾기
                    </StyledLink>
                </ServiceMenu>
            </Wrapper>

            <Wrapper>
                <img src={KakaoLogin} alt='X' />
            </Wrapper>
        </Container>
    </ContainerWrapper>    
    )
}

export default Login