import React , {useState} from "react";
import styled ,{css} from "styled-components";
import { Link } from "react-router-dom";
import items from '../json/test'


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
        background-image : url(${Foot});
        background-repeat: no-repeat;
        border-bottom: 0.1px solid #FF6600;

        transition: 0.3s;
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
        background-image : url(${Foot});
        background-repeat: no-repeat;
        border-bottom: 0.1px solid #FF6600;
        transition: 0.3s;
      }
    `}

`

const Foot = './img/footprint30.png'
const Crown = './img/crown30.png'

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
top : 18%;
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

`


const Ul = styled.ul`
display : inline-block;
`
const Oi = styled.ol`
display : inline-block;

`

function Home(){

    const [isOpenDog, setMenuDog] = useState(false)
    
    const [isOpenCat, setMenuCat] = useState(false)

    const ToggleMenuDog = () =>{
        setMenuDog(isOpenDog => !isOpenDog)
        setMenuCat(false)
        console.log('isOpenDog',isOpenDog)
        console.log(isOpenCat)

    }
    const ToggleMenuCat = () =>{
        setMenuCat(isOpenCat => !isOpenCat)
        setMenuDog(false)
        console.log('isOpenDog',isOpenDog)
        console.log(isOpenCat)
    }



    return(
        <NavContainer>
            <NavTopContainerWrapper>
            <NavTopContainer>
                <StyledLink to='/' PetProject>
                    PetProject
                </StyledLink>
                <ButtonGroup>
                    <StyledLink to='/'>
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
                <StyledLink to='/Best' Best>
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
                        애견 용품
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

        </NavContainer>
    )

}

export default Home