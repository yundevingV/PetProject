import React,{useState} from "react";
import styled from "styled-components";
import { Link , useNavigate } from "react-router-dom";


import KakaoLogin from '../img/KakaoLoginImg.png'

import { FooterWrapper } from "../styles/FooterStyles";
import Footer from "./Footer";
import Nav from "./Nav";

import UserData from "../json/User.json"
/*redux */
import { useDispatch, useSelector } from "react-redux";
import {loginn, handleChangeId, handleChangePassword, logout} from '../modules/login.js'

const ContainerWrapper = styled.div`
width: 100%;
height: 100vh;
`
const Container = styled.div`

height : 50vh;
margin : 0 auto;
margin-top : 7rem;
position: absolute;
left: 35%;
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
display: block;
text-align : ${(props) => props.textAlign};
margin-bottom : ${(props) => props.marginBottom};
text-align : center;

`
function Login(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector((state) => state.login.id)
    const password = useSelector((state) => state.login.password)

    console.log(UserData)
    
    let correctId = UserData.user.filter((item)=> item.userId === id )
    let correctPassword = UserData.user.map((item)=> item.userPassword === password)
    //filter 객체 반환 , map boolean 반환
    
    console.log(id,correctId)  
    console.log(password,correctPassword)

    const correct = () => {
        if (correctId && correctPassword ) {
            navigate("/")
        }
    }
    

    return(
    <>
    <Nav />

    <ContainerWrapper>
        <Container>

            <Wrapper marginBottom='1rem'>
                <Input  
                    placeholder='아이디'
                    type='text'
                    onChange={(event)=> dispatch(handleChangeId(event.target.value))}
                    value={id} /> 
               
            </Wrapper>

            <Wrapper marginBottom='1rem'>
                <Input 
                    marginBottom='3rem' 
                    placeholder='비밀번호' 
                    type='text'
                    onChange={(event)=> dispatch(handleChangePassword(event.target.value))}
                    value={password} />
               
            </Wrapper>

            <Wrapper marginBottom='0.3rem'>
                <SubmitButton 
                    onClick={()=>{dispatch(loginn(id,password))
                    correct()
                    
                }}>
                    <SubmitButtonFont >
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

    <FooterWrapper>
        <Footer />
    </FooterWrapper>
    </>
    )
}

export default Login