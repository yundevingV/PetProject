import React from "react";
import styled ,{css } from "styled-components";
import { Link } from "react-router-dom";

import DogMenuMain from "./DogMenuMain";
import CatMenuMain from "./CatMenuMain";
import Nav from "./Nav";
import Crown from '../img/crown30.png'
import DogFoot from '../img/dog-Solid.svg'
import CatFoot from '../img/cat-solid.svg'

/*메뉴*/
import { useDispatch, useSelector } from "react-redux";
import { cat, dogCategory, catCategory, dog} from '../modules/category'

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
    &:focus{
        border-bottom: 1px solid red;
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
    &:focus{
        border-bottom: 1px solid red;
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

const NavMiddleContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
background: #FFFFFF;
position: absolute;
top : 7%;
background: #FFFFaa;
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
const NavTopContainerWrapper = styled.div`
position: relative;
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



const DogMenu = styled.div`

position: absolute;
top:12%;

`
const CatMenu = styled.div`

position: absolute;
top:12%;

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
cursor : pointer;

&:focus{
    border-bottom: 1px solid red;
}

`
const OiButtonSpan = styled.span`
font-size: 1rem;
text-align: center;
`

const MenuMainWrapper = styled.div`
position: absolute;
top:33%;
`
function Home(){

    const animal = useSelector((state) => state.category.animalState)
    const category = useSelector((state) => state.category.categoryState)
    const dispatch = useDispatch()
    

    return(
        <>
        
        <NavContainer>
            <NavTopContainerWrapper>

                <Nav />

            </NavTopContainerWrapper>
            <NavMiddleContainer>
                <StyledLink to='/' Best>
                    Best
                </StyledLink>
                <StyledLink to='/' Dog
                    onClick={()=>{dispatch(dog())}}>
                    강아지
                    
                </StyledLink>   


                <StyledLink to='/' Cat
                    onClick={()=>dispatch(cat())}>

                    고양이
                </StyledLink>

            </NavMiddleContainer>
            {animal === 'dog' ?
            <DogMenu>
                <Ul>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_house')))}>
                        <OiButtonSpan>
                            집
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_cover')))}>
                        <OiButtonSpan>
                            옷
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_food')))}>
                        <OiButtonSpan>
                            먹이
                        </OiButtonSpan>
                    </OiButton>
                </Oi>        
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_snack')))}>
                        <OiButtonSpan>
                            간식
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_toy')))}>
                        <OiButtonSpan>
                            장난감
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_pad')))}>
                        <OiButtonSpan>
                            배변패드
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(dogCategory(('dog_dogTool')))}>
                        <OiButtonSpan>
                            애견 용품
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                </Ul>    
            </DogMenu>
            :
            <></>
            }   
            
            {animal === 'cat' ?
            <CatMenu >
            <Ul>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_house')))}>
                        <OiButtonSpan>
                            집
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_cover')))}>
                        <OiButtonSpan>
                            옷
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_food')))}>
                        <OiButtonSpan>
                            먹이
                        </OiButtonSpan>
                    </OiButton>
                </Oi>        
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_snack')))}>
                        <OiButtonSpan>
                            간식
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_toy')))}>
                        <OiButtonSpan>
                            장난감
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_pad')))}>
                        <OiButtonSpan>
                            배변패드
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                <Oi>
                    <OiButton onClick={()=>dispatch(catCategory(('cat_catTool')))}>
                        <OiButtonSpan>
                            애묘 용품
                        </OiButtonSpan>
                    </OiButton>
                </Oi>
                </Ul>
            </CatMenu>
            :
            <></>
            }
            <NavBottomContainer>
                <SearchInput placeholder='검색어를 입력하세요 ...'>

                </SearchInput>
            </NavBottomContainer>

            {animal === 'dog' ?
            <MenuMainWrapper>
            <DogMenuMain category={category} animal={animal} />
            </MenuMainWrapper>
            :
            <></>
            }

            {animal === 'cat' ?
            <MenuMainWrapper >
            <CatMenuMain category={category} animal={animal} />
            </MenuMainWrapper>
            :
            <></>
            }

        </NavContainer>
        </>
    )

}




export default Home