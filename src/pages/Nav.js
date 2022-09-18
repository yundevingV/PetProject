import React ,{useState} from "react";
import styled,{css} from "styled-components";
import Shopping from '../img/cart-shopping-solid.svg'
import {Link} from 'react-router-dom'

const NavTopContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
background: #FFFFFF;

position: relative;
`

const StyledLink = styled(Link)`
text-decoration : none;
${(props) =>
    props.PetProject &&
    css`
      width: 20%;
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
    right : 10%;
}
@media (min-width : 1000px) or (max-width : 1200px) {
    right:9%;
}
@media (min-width : 1500px) {
    right:7%;
}
`

const Button = styled.button`

width: 5rem;
height: 2.5rem;
border-radius : 0rem;
padding : 0.2rem;

outline : 0;

${(props) =>
    props.login &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 1px solid #9ED6C0;
    margin-left: auto;
    margin-top: 0.2rem;
    position: absolute;

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.logout &&
    css`
    color: #FFFFFF;
    background: #9ED6C0;
    border: 1px solid #FFFFFF;
    margin-top: 0.2rem;
    margin-right : 1.2rem;
    position: absolute;

    &:hover{
        color: #9ED6C0;
        background: #FFFFFF;
        border: 1px solid #9ED6C0;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.SignUp &&
    css`
    color: #FFFFFF;
    background: #9ED6C0;
    border: 1px solid #FFFFFF;
    margin-top: 0.2rem;
    margin-right : 1rem;

    &:hover{
        color: #9ED6C0;
        background: #FFFFFF;
        border: 1px solid #9ED6C0;
        transition: 0.3s;
    }
    `}
    
${(props) =>
    props.Shopping &&
    css`
    margin-top: 0.2rem;
    margin-right : 1rem;
    background: #FFFFFF;
    border : 0px;   
    
    `}

`

function Nav(){
    const [login , setLogin] = useState(true)

    return(

        <NavTopContainer>
        <StyledLink to='/Test' PetProject>
            PetProject
        </StyledLink>
        {login === false ?
            /*로그인 성공하면*/
            <ButtonGroup>
                <StyledLink to='/SignUp'>
                    <Button SignUp>
                        Sign Up
                    </Button>
                </StyledLink>
                <StyledLink to='/Test'>
                    <Button login>
                        Log in
                    </Button>
                </StyledLink>
            </ButtonGroup>
            :
            /*로그인 하기전*/
            <ButtonGroup>
                <StyledLink to='/ShoppingList'>
                    <Button Shopping>
                        <img src={Shopping} alt='X' />
                    </Button>
                </StyledLink>
                <StyledLink to='/'>
                    <Button logout>
                        Log Out
                    </Button>
                </StyledLink>
            </ButtonGroup>
        }

    </NavTopContainer>
    )
}

export default Nav