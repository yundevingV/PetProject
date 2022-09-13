import React , {useState} from "react";
import styled ,{css } from "styled-components";
import { Link } from "react-router-dom";

import DogMenuMain from "./DogMenuMain";


import Crown from '../img/crown30.png'
import DogFoot from '../img/dog-Solid.svg'
import CatFoot from '../img/cat-solid.svg'


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
    display : none;
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
    ${(props) =>
    props.Best &&
    css`
      width: 15%;
      color: #000000;
      font-weight : bold;
      border: 1px solid #FFFFFF;
      font-size : 1.5rem;
      margin-left : 10%;
      &:hover{
        color: #000000;
        background-image: url(${Crown});
        background-repeat : no-repeat ;
        border-bottom: 0.1px solid #FFCC66;
        transition: 0.3s;
      }
      
    `}

    ${(props) =>
    props.Dog &&
    css`
      width: 15%;
      color: #000000;
      font-weight : bold;
      border: 1px solid #FFFFFF;
      font-size : 1.5rem;
      margin-left : 10%;
      &:hover{
        color: #000000;
        
        background-image : url(${DogFoot});
        background-repeat: no-repeat;
        border-bottom: 0.1px solid #FF6600;
        background-position: top right;
        transition: 1s;
      }
      
    `}
    ${(props) =>
    props.Cat &&
    css`
      width: 15%;
      color: #000000;
      font-weight : bold;
      border: 1px solid #FFFFFF;
      font-size : 1.5rem;
      margin-left : 10%;
      &:hover{
        color: #000000;
        background-image : url(${CatFoot});
        background-repeat: no-repeat;
        border-bottom: 0.1px solid #FF6600;
        background-position: top right;
        transition: 1s;
      }
    `}

`



const NavContainer = styled.div`

margin: 0 auto;

/*max-width 아래면 밑에 css 적용*/
@media (max-width : 600px) {
    display: none;
}

`
const NavTopContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
background: #FFFFFF;

position: absolute;
`
const NavMiddleContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
background: #FFFFFF;
position: absolute;
top : 7%;
`

const NavBottomContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
background: #FFFFFF;
position: absolute;
top : 20%;
@media (max-width : 1000px) {
    top : 25%;
}

`

const SearchInput = styled.input`
margin: 0 auto;
width: 30%;
height: 30px;
border-radius : 5rem;
position : absolute;
left : 35%;

::placeholder{
    font-weight : bold;

}
`
const NavTopContainerWrapper = styled.div`
position: relative;
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

const DogMenu = styled.div`

display: ${props => props.display ? 'block' : 'none'};
position: absolute;
top:12%;

`
const CatMenu = styled.div`

display: ${props => props.display ? 'block' : 'none'};
position: absolute;
top:12%;
@media (max-width : 1000px) {
    display: none;
}
`


const Ul = styled.ul`
display : inline-block;
`
const Oi = styled.ol`
display : inline-block;
cursor : pointer;
width : 5.5rem;


`

const OiButton = styled.button`
background: #FFFFFF;
border : 0px;
&:focus{
    border: 1px solid red;
}
`
const OiButtonSpan = styled.span`
font-size: 1rem;
text-align: center;
`


const DogMenuMainWrapper = styled.div`
display: ${props => props.display ? 'block' : 'none'};
position: absolute;
top:30%;
`

function Home(){
    //세부메뉴
    const [isOpenDog, setMenuDog] = useState(false)
    //상품목록
    const [showMenuDog,setShowMenuDog] = useState(false)
    
    const [isOpenCat, setMenuCat] = useState(false)

    const ToggleMenuDog = () =>{
        setMenuDog(true)
        setMenuCat(false)
        setShowMenuDog(true)
        setCategoryDog('')
    }
    const ToggleMenuCat = () =>{
        setMenuCat(true)
        setMenuDog(false)
    }
    
    
    //세부 카테고리별 필터링
    const [categoryDog , setCategoryDog] = useState('')
    const ToggleCategory = (category) =>{
        setCategoryDog(category)
        setMenuDog(true)
    }

    return(
        <NavContainer>
            <NavTopContainerWrapper>
            <NavTopContainer>
                <StyledLink to='/Test' PetProject>
                    PetProject
                </StyledLink>
                <ButtonGroup>
                    
                    <StyledLink to='/SignUp'>
                        <Button SignUp>
                            Sign Up
                        </Button>
                    </StyledLink>

                    <StyledLink to='/Test'>
                        <Button logout>
                            Log out
                        </Button>
                    </StyledLink>

                    <StyledLink to='/Login'>
                        <Button login>
                            Log in
                        </Button>
                    </StyledLink>

                </ButtonGroup>
            </NavTopContainer>
            </NavTopContainerWrapper>
            <NavMiddleContainer>
                <StyledLink to='/' Best>
                    Best
                </StyledLink>
                <StyledLink to='/' Dog
                    onClick={()=>ToggleMenuDog()}>
                    강이지
                    
                </StyledLink>   


                <StyledLink to='/' Cat
                    onClick={()=>ToggleMenuCat()}>

                    고양이
                </StyledLink>

            </NavMiddleContainer>

            <DogMenu display={isOpenDog}>
                <Ul>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('house')}>
                        <OiButtonSpan>
                            집
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('cover')}>
                        <OiButtonSpan>
                            옷
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('food')}>
                        <OiButtonSpan>
                            먹이
                        </OiButtonSpan>
                    </OiButton>
                </Oi>        
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('snack')}>
                        <OiButtonSpan>
                            간식
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('toy')}>
                        <OiButtonSpan>
                            장난감
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('pad')}>
                        <OiButtonSpan>
                            배변패드
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategory('dogTool')}>
                        <OiButtonSpan>
                            애견 용품
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                </Ul>    
            </DogMenu>

            <CatMenu display={isOpenCat}>
                <Ul>
                    <Oi>
                        집
                    </Oi>
                    <Oi>
                        옷
                    </Oi>
                    <Oi>
                        먹이
                    </Oi>
                    <Oi>
                        간식
                    </Oi>
                    <Oi>
                        장난감
                    </Oi>
                    <Oi>
                        배변패드
                    </Oi>
                    <Oi>
                        애묘용품
                    </Oi>
                </Ul>    
            </CatMenu>
            <NavBottomContainer>
                <SearchInput placeholder='검색어를 입력하세요 ...'>

                </SearchInput>
            </NavBottomContainer>

            <DogMenuMainWrapper display={showMenuDog} >
            <DogMenuMain category={categoryDog}/>
            </DogMenuMainWrapper>

        </NavContainer>
    )

}
DogMenuMain.defaultProps = {
    category : ''
  }

export default Home