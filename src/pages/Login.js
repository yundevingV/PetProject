import React,{useState} from "react";
import styled from "styled-components";
import { Link , useNavigate } from "react-router-dom";


import KakaoLogin from '../img/KakaoLoginImg.png'
import eye from '../img/eye-solid.svg'

import { FooterWrapper } from "../styles/FooterStyles";
import Footer from "./Footer";
import Nav from "./Nav";

import UserData from "../json/User.json"
/*redux */
import { useDispatch, useSelector } from "react-redux";
import {loginn, handleChangeId, handleChangePassword, logout} from '../modules/login.js'

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContainerWrapper = styled.div`
width: 100%;
height: 100vh;
`
const Container = styled.div`
width: 100%;
height : 50vh;
margin : 0 auto;
margin-top : 7rem;
position: absolute;

text-align: center;
`

const Input = styled.input`
display : block;
width : 500px;
height: 50px;
text-align: left;
overflow: hidden;
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
    background : #20a8d8;
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
margin-top : ${(props) => props.marginTop};
text-align : center;

`

const TopContainer = styled.div`
margin: 0 auto;
display: inline-block;
`
const PasswordWrapper = styled.div`
display: flex;
justify-content: right;

z-index: 2;
opacity: 1;
`
const Button = styled.button`
position: absolute;


text-align: right;
background-color: #FFFFFF;
border : 1px solid #000000;
border-left: 0px solid #FFFFFF;
`

const Img = styled.img`
width: 30px;
height: 48px;
z-index: 0;
`

function Login(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const id = useSelector((state) => state.login.id)
    const password = useSelector((state) => state.login.password)
    
    const correctIdFunc = (correctId) => {
        if (correctId.userId === id) return true
    }    
    const correctIndex = UserData.user.findIndex(correctIdFunc)

    const correct = () => {
        if(UserData.user[correctIndex].userPassword === password)
            return true
    }  

    const [showPassword, setShowPassword] = useState(false)
    
    const showPasswordButton = () => {
        showPassword === false ? setShowPassword(true) : setShowPassword(false)
    }

    return(
    <>
    <Nav />

    <ContainerWrapper>
        <Container>
            <TopContainer>
                <Wrapper marginBottom='1rem'>
                    <Input  
                        placeholder='아이디'
                        type='text'
                        onChange={(event)=> dispatch(handleChangeId(event.target.value))}
                        value={id} /> 
                
                </Wrapper>

                <Wrapper marginBottom='1rem'>
                    <PasswordWrapper>
                    <Input 
                        marginBottom='3rem' 
                        placeholder=' 비밀번호' 
                        type={showPassword ? "text" : "password"}
                        onChange={(event)=> dispatch(handleChangePassword(event.target.value))}
                        value={password} />
                    
                    <Button onClick={()=>showPasswordButton()}>
                        <Img src={eye} alt='x'></Img>
                    </Button>

                    </PasswordWrapper>

                
                
                </Wrapper>

                <Wrapper marginBottom='0.3rem'>
                    <SubmitButton 
                        onClick={()=>{
                        dispatch(loginn(id,password))
                            if (correct() === true){
                                navigate('/')
                            } else if (correctIndex) {
                                alert('비밀번호를 확인해주세요')
                            } else {
                                alert('아이디를 확인해주세요.')
                            }
                        
                        
                    }}>
                        <SubmitButtonFont >
                            로그인하기
                        </SubmitButtonFont>
                    </SubmitButton>
                </Wrapper>

            <Wrapper  textAlign='left' marginBottom='5rem' >
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
                
                <Wrapper marginTop='2rem'> 
                    <img src={KakaoLogin} alt='X' />
                </Wrapper>
            
        </TopContainer>



        </Container>
    </ContainerWrapper>    

    <FooterWrapper>
        <Footer />
    </FooterWrapper>
    </>
    )
}

export default Login