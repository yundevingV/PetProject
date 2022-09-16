import React , {useState} from "react";
import styled ,{css } from "styled-components";
import { Link } from "react-router-dom";

import DogMenuMain from "./DogMenuMain";
import CatMenuMain from "./CatMenuMain";

import Crown from '../img/crown30.png'
import DogFoot from '../img/dog-Solid.svg'
import CatFoot from '../img/cat-solid.svg'
import Shopping from '../img/cart-shopping-solid.svg'

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
    margin-right : 1rem;
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
    border-bottom: 1px solid red;
}
`
const OiButtonSpan = styled.span`
font-size: 1rem;
text-align: center;
`


const DogMenuMainWrapper = styled.div`
display: ${props => props.display ? 'block' : 'none'};
position: absolute;
top:33%;
`
const CatMenuMainWrapper = styled.div`
display: ${props => props.display ? 'block' : 'none'};
position: absolute;
top:33%;
`
function Home(){

    //로그인정보
    //test를 위해 true
    const [login , setLogin] = useState(true)


    //세부메뉴
    const [isOpenDog, setMenuDog] = useState(false)

    //상품목록
    const [showMenuDog,setShowMenuDog] = useState(false)
    
    const [isOpenCat, setMenuCat] = useState(false)
    const [showMenuCat,setShowMenuCat] = useState(false)

    const [isAnimal, setIsAnimal] = useState('')
    const ToggleMenuDog = (dog) =>{
        setIsAnimal(isAnimal => isAnimal = dog)

        setMenuDog(true)
        setMenuCat(false)
        setShowMenuDog(true)
        setShowMenuCat(false)
        setCategoryDog('')
        console.log(isAnimal)
    }
    const ToggleMenuCat = (cat) =>{
        setIsAnimal(isAnimal => isAnimal = cat)

        setMenuCat(true)
        setMenuDog(false)
        setShowMenuCat(true)
        setShowMenuDog(false)
        setCategoryCat('')
        console.log(isAnimal)
    }
    
    
    //세부 카테고리별 필터링
    const [categoryDog , setCategoryDog] = useState('')
    const ToggleCategoryDog = (category,dog) =>{
        setCategoryDog(category)
        setMenuDog(true)
        setIsAnimal(dog)

    }

    const [categoryCat , setCategoryCat] = useState('')
    const ToggleCategoryCat = (category,cat) =>{
        setCategoryCat(category)
        setMenuCat(true)
        setIsAnimal(cat)

    }
    return(
        <NavContainer>
            <NavTopContainerWrapper>
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
            </NavTopContainerWrapper>
            <NavMiddleContainer>
                <StyledLink to='/' Best>
                    Best
                </StyledLink>
                <StyledLink to='/' Dog
                    onClick={()=>ToggleMenuDog('dog')}>
                    강아지
                    
                </StyledLink>   


                <StyledLink to='/' Cat
                    onClick={()=>ToggleMenuCat('cat')}>

                    고양이
                </StyledLink>

            </NavMiddleContainer>

            <DogMenu display={isOpenDog}>
                <Ul>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('house')}>
                        <OiButtonSpan>
                            집
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('cover')}>
                        <OiButtonSpan>
                            옷
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('food')}>
                        <OiButtonSpan>
                            먹이
                        </OiButtonSpan>
                    </OiButton>
                </Oi>        
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('snack')}>
                        <OiButtonSpan>
                            간식
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('toy')}>
                        <OiButtonSpan>
                            장난감
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('pad')}>
                        <OiButtonSpan>
                            배변패드
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryDog('dogTool')}>
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
                    <OiButton onClick={()=>ToggleCategoryCat('house')}>
                        <OiButtonSpan>
                            집
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('cover')}>
                        <OiButtonSpan>
                            옷
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('food')}>
                        <OiButtonSpan>
                            먹이
                        </OiButtonSpan>
                    </OiButton>
                </Oi>        
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('snack')}>
                        <OiButtonSpan>
                            간식
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('toy')}>
                        <OiButtonSpan>
                            장난감
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('pad')}>
                        <OiButtonSpan>
                            배변패드
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>ToggleCategoryCat('catTool')}>
                        <OiButtonSpan>
                            애묘 용품
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                </Ul>
            </CatMenu>
            <NavBottomContainer>
                <SearchInput placeholder='검색어를 입력하세요 ...'>

                </SearchInput>
            </NavBottomContainer>
            {isAnimal === 'dog' ?
            <DogMenuMainWrapper display={showMenuDog} >
            <DogMenuMain category={categoryDog} animal={isAnimal} />
            </DogMenuMainWrapper>
            :
            <></>
            }
            {isAnimal === 'cat' ?
            <CatMenuMainWrapper display={showMenuCat} >
            <CatMenuMain category={categoryCat} animal={isAnimal} />
            </CatMenuMainWrapper>
            :
            <></>
            }
        </NavContainer>
    )

}
DogMenuMain.defaultProps = {
    category : ''
  }

export default Home