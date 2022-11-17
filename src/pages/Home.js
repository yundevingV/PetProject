import React from "react";
import styled ,{css , keyframes} from "styled-components";
import { Link } from "react-router-dom";

import DogMenuMain from "./DogMenuMain";
import CatMenuMain from "./CatMenuMain";
import Nav from "./Nav";
import Crown from '../img/crown30.png'
import DogFoot from '../img/dog-Solid.svg'
import CatFoot from '../img/cat-solid.svg'

/*메뉴*/
import { useDispatch, useSelector } from "react-redux";
import { cat, dogCategory, catCategory, dog, best} from '../modules/category'
import { handle } from "../modules/handle";

import Footer from './Footer'
import { FooterWrapper } from "../styles/FooterStyles";
import BestCarousel from "./BestCarousel";

const StyledLinkWrapper = styled.div`
display: inline-block;
width: 10rem;
/*max-width 아래면 밑에 css 적용*/
@media (min-width : 1000px) {
    width: 15rem;
}
@media (min-width : 1500px) {
    width: 20rem;
}
height: 3rem;
text-align: center;
`

const StyledLink = styled(Link)`
text-decoration : none;
${(props) =>
    props.PetProject &&
    css`
        width: 20vh;
        color: #000000;
        font-weight : bold;
        font-size : 2rem;
        position : absolute;
        left : 45vh;

    `}
${(props) =>
    props.Best &&
    css`
        width: 15vh;
        color: #000000;
        font-weight : bold;
        padding: 1rem;
        font-size : 1.5rem;
        margin-left : 10%;
        &:hover{
            color: #000000;
            background-image: url(${Crown});
            background-repeat : no-repeat ;
            transition: 0.3s;
    }
    
    `}

${(props) =>
    props.Dog &&
    css`
        width: 15vh;
        color: #000000;
        font-weight : bold;
        font-size : 1.5rem;
        margin-left : 5vh;
    &:hover{
        color: #000000;
        background-image : url(${DogFoot});
        background-repeat: no-repeat;
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
        width: 15vh;
        color: #000000;
        font-weight : bold;
        font-size : 1.5rem;
        margin-left : 5vh;
    &:hover{
        color: #000000;
        background-image : url(${CatFoot});
        background-repeat: no-repeat;
        background-position: top right;
        transition: 1s;
    }
    &:focus{
        border-bottom: 1px solid red;
    }
    `}
`

const HomeContainer = styled.div`

margin: 0 auto;

height: 120vh;

@media (max-width : 600px) {
    display: none;
}


`

const NavMiddleContainer = styled.div`
width : 100%;
height : 5vh;
margin : 0 auto;
position: absolute;
top : 7vh;

border-bottom: 1px solid black;



`

const NavBottomContainer = styled.div`
width : 100%;
height : 5%;
margin : 0 auto;
position: absolute;
top : 20vh;

`


const BestCarouselContainer = styled.div`
width : 100%;
margin : 0 auto;

position: absolute;
top:8vh;
display: block;
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
top:12vh;

`
const CatMenu = styled.div`

position: absolute;
top:12vh;

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
border : 0px;
cursor : pointer;
//버튼배경을 현재배경으로,,
background-color:transparent;
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
top:70vh;

`
const Span = styled.span`
padding: 1rem;
display: block;
`



function Home(){    


    const animal = useSelector((state) => state.category.animalState)
    const category = useSelector((state) => state.category.categoryState)
    const word = useSelector((state) => state.handle.word)

    const showCategory = () => {
        if (category === '') {return ''}
        else if (category === 'dog') {return ''}
        else if (category === 'dog_house') {return ' > 집'}
        else if (category === 'dog_cover') {return ' > 옷'}
        else if (category === 'dog_food') {return ' > 먹이'}
        else if (category === 'dog_snack') {return ' > 간식'}
        else if (category === 'dog_toy') {return ' > 장난감'}
        else if (category === 'dog_pad') {return ' > 배변패드'}
        else if (category === 'dog_dogTool') {return ' > 애견용품'}
        else if (category === 'cat') {return ''}
        else if (category === 'cat_house') {return ' > 집'}
        else if (category === 'cat_cover') {return ' > 옷'}
        else if (category === 'cat_food') {return ' > 먹이'}
        else if (category === 'cat_snack') {return ' > 간식'}
        else if (category === 'cat_toy') {return ' > 장난감'}
        else if (category === 'cat_pad') {return ' > 배변패드'}
        else if (category === 'cat_catTool') {return ' > 애견용품'}
        

    }

    const dispatch = useDispatch()
        return(
        <>
        
        <HomeContainer>
            <NavTopContainerWrapper>

                <Nav />

            </NavTopContainerWrapper>
            <NavMiddleContainer>

                <StyledLinkWrapper>
                    <StyledLink to='/' Dog
                        onClick={()=>{dispatch(dog())}}>
                        강아지
                    </StyledLink>   
                </StyledLinkWrapper>

                <StyledLinkWrapper>
                    <StyledLink to='/' Cat
                        onClick={()=>dispatch(cat())}>
                        고양이
                    </StyledLink>
                </StyledLinkWrapper>

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
                <SearchInput 
                    type='text' 
                    placeholder='검색어를 입력하세요 ...'
                    onChange={(event)=> dispatch(handle(event.target.value))}
                    value ={word}
                    >
                </SearchInput>

            <BestCarouselContainer>
                <BestCarousel />
            </BestCarouselContainer>

            </NavBottomContainer>
            


            {animal === 'dog' ?
            <MenuMainWrapper>
                <Span>강아지 {showCategory()}</Span>
                <DogMenuMain category={category} animal={animal} word={word} />
            </MenuMainWrapper>
            :
            <></>
            }

            {animal === 'cat' ?
            <MenuMainWrapper >
                <Span>고양이 {showCategory()}</Span>
                <CatMenuMain category={category} animal={animal} word={word} />
            </MenuMainWrapper>
            :
            <></>
            }
        


        </HomeContainer>

        {/* footer */}
        <FooterWrapper>
            <Footer />
        </FooterWrapper>

        </>
    )

}




export default Home