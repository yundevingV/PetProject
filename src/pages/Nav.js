import React ,{useState} from "react";
import styled,{css} from "styled-components";
import Shopping from '../img/cart-shopping-solid.svg'
import User from '../img/user-solid.svg'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import {logout} from "../modules/login"
const NavWrapper = styled.div`
width : 100%;
height : 6vh;
margin : 0 auto;
background: #FFFFFF;

position: relative;
border-bottom: 1px solid #847770;
`

const StyledLink = styled(Link)`
text-decoration : none;
${(props) =>
    props.PetProject &&
    css`
      width: 20vh;
      color: #000000;
      font-weight : bold;
      border: 1px solid #FFFFFF;
      font-size : 2rem;
      position : absolute;
      left : 45%;

    `}

`
const ButtonGroup = styled.div`
position: absolute;

@media (max-width : 1000px) {
    right : 10vh;
}
@media (min-width : 1000px) or (max-width : 1200px) {
    right:9vh;
}
@media (min-width : 1500px) {
    right:10vh;
}
`

const Button = styled.button`

width: 5rem;
height: 2.5rem;
border-radius : 0rem;
padding : 0.2rem;
margin-top: 0.2vh;

outline : 0;

${(props) =>
    props.login &&
    css`
    color: #20dba1;
    background: #FFFFFF;
    border: 1px solid #20dba1;
    margin-left: auto;
    position: absolute;
    border-radius : 0.2rem;

    &:hover{
        color: #FFFFFF;
        background: #20dba1;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.logout &&
    css`
    color: #FFFFFF;
    background: #20dba1;
    border: 1px solid #FFFFFF;
    position: absolute;
    border-radius : 0.2rem;

    &:hover{
        color: #20dba1;
        background: #FFFFFF;
        border: 1px solid #20dba1;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.SignUp &&
    css`
    color: #FFFFFF;
    background: #20dba1;
    border: 1px solid #FFFFFF;
    border-radius : 0.2rem;

    &:hover{
        color: #20dba1;
        background: #FFFFFF;
        border: 1px solid #20dba1;
        transition: 0.3s;
    }
    `}
    
${(props) =>
    props.Shopping &&
    css`
    background: #FFFFFF;
    border : 0px;   
    
    `}
${(props) =>
    props.User &&
    css`
    background: #FFFFFF;
    border : 0px;   
    
    `}
`

function Nav(){

    const dispatch = useDispatch()

    const loginStatus = useSelector((state) => state.login.loginStatus)
    
    return(

        <NavWrapper>
        <StyledLink to='/' PetProject>
            PetProject
        </StyledLink>
        
            {!loginStatus ?
            <ButtonGroup>
                <StyledLink to='/SignUp'>
                    <Button SignUp>
                        Sign Up
                    </Button>
                </StyledLink>
                <StyledLink to='/Login'>
                    <Button login>
                        Log in
                    </Button>
                </StyledLink>
            </ButtonGroup>
            
            :
            <ButtonGroup>
                <StyledLink to='/User'>
                    <Button User>
                        <img src={User} alt='X' />
                    </Button>
                </StyledLink>
                <StyledLink to='/Cart'>
                    <Button Shopping>
                        <img src={Shopping} alt='X' />
                    </Button>
                </StyledLink>
                <StyledLink to='/'>
                    <Button 
                        logout
                        onClick={()=>{dispatch(logout())}}
                            >
                        Log Out
                    </Button>
                </StyledLink>
            </ButtonGroup>
        }

    </NavWrapper>
    )
}

export default Nav