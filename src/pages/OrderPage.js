import React,{useState} from "react";
import { useParams } from 'react-router-dom';
import styled ,{css} from "styled-components";
import { useDispatch} from "react-redux";

import Nav from "./Nav";
/*데이터불러오기*/
import DogData from '../json/Dog.json'
import CatData from '../json/Cat.json'

import Comment from "./Comment"

import {add} from "../modules/cart"
import Footer from './Footer'
import { FooterWrapper } from "../styles/FooterStyles";

const Container = styled.div`
width: 60vh;
height: 90vh;
margin: 0 auto;

/*1000이상일경우*/
/* @media (min-width : 1000px){
    width: 50vh;
}
@media (min-width : 1400px){
    width: 40vh;
}
@media (min-width : 1600px){
    width: 90vh;

}

@media (max-width : 700px){
        width: 80vh;
}
@media (max-width : 600px){
    width: 30vh;
} */
`

const NavTopContainerWrapper = styled.div`
position: relative;
display: block;
`

const Wrapper = styled.div`
position: relative;
top:5rem;
`

const Img = styled.img`
width: 100%;
height : 35vh;

`
const ImgWrapper = styled.div`

`
const NameWrapper = styled.div`
border: 1px solid black;
background-color: azure;
`
const PriceWrapper = styled.div`
border: 1px solid black;
`

const NumWrapper = styled.div`
width:33%;
float : left;
border-right : 1px solid black;
`

const BottomWrapper = styled.div`
overflow:auto;
background: #e7ebd9;
border: 1px solid black;

`

const InfoWrapper = styled.div`
width: 100%;
background : #e7ebd9;
height: 100%;
border: 1px solid black;
`

const Font = styled.div`
font-weight: 1000;
${(props) =>
    props.Name &&
    css`
    padding: 1rem;
    `}

${(props) =>
    props.Price &&
    css`
    padding: 1rem;
    color : red;
    `}

${(props) =>
    props.Num &&
    css`
    padding: 1rem;
    `}
`

const ButtonGroup = styled.div`
float: left;
width: 66%;
position: relative;

`
const Button = styled.button`
position: absolute;
margin-top: 0.5rem;

${(props) =>
    props.Plus &&
    css`
    margin-left: 1rem;
    padding: 0.5rem;
    width: 2rem;
    height : 2.5rem;
    left : 0%;
    background: #FFFFFF;
    `}

${(props) =>
    props.Minus &&
    css`
    margin-left: 1rem;
    padding: 0.5rem;
    width: 2rem;
    height : 2.5rem;
    top:50%;
    left : 10%;
    background: #FFFFFF;
    `}

${(props) =>
    props.Add &&
    css`
    padding: 0.5rem;
    left : 30%;
    width: 6.5rem;
    height: 2.5rem;
    border : 2px solid #00B5E3;
    background: #FFFFFF;
    border-radius : 0.2rem;
    `}

${(props) =>
    props.Buy &&
    css`
    padding: 0.5rem;
    right : 0%;
    width: 6.5rem;
    height: 2.5rem;
    background: #00B5E3;
    border : 2px solid #E7E6D2;
    border-radius : 0.2rem;
    `}
`


function OrderPage(props){

    /* json 합치기 */
    const Data = {...DogData, ...CatData }

    const {id , animal} = useParams()

    const [num, setNum] = useState(parseInt(Data[animal][id].amount))
    const [totalPrice , setTotalPrice] = useState(parseInt(Data[animal][id].price))
    
    let price = parseInt(Data[animal][id].price)

    const Plus = () => {
        setNum(num => num +1)        
        setTotalPrice(price * (num+1))
    }

    const Minus = () => {
        num > 1 ? setNum(num -1) :
        setNum(num => num = 1)
        num > 1 ? setTotalPrice(price * (num-1)) :
        setTotalPrice(price)
    }

    /*redux */
    const dispatch = useDispatch()

    return(
        
        <>

        <NavTopContainerWrapper>
            <Nav />
        </NavTopContainerWrapper>

        <Container>
            <Wrapper>
                <ImgWrapper>
                    <Img src={Data[animal][id].src} alt='X' />
                </ImgWrapper>

                <NameWrapper>
                    <Font Name>{Data[animal][id].name}</Font>
                </NameWrapper>

                <PriceWrapper>
                    <Font Price>{totalPrice} 원 </Font>
                </PriceWrapper>
                <BottomWrapper>
                    <NumWrapper>
                        <Font Num>
                            수량 : {num}
                        </Font>
                    </NumWrapper>

                    <ButtonGroup>
                        <Button Plus
                            onClick={()=>Plus()}>
                            +
                        </Button>
                        <Button Minus
                            onClick={()=>Minus()}>
                            -
                        </Button>
                        <Button Add
                            onClick={()=>{dispatch
                                (add(id,Data[animal][id].name,
                                (parseInt(Data[animal][id].price) *parseInt(num)) ,
                                num,
                                Data[animal][id].src,
                                Data[animal][id].category
                                ))}}>
                            장바구니 추가
                        </Button>
                        <Button Buy>
                            바로 구매하기
                        </Button>
                    </ButtonGroup>
                </BottomWrapper>
                
                <InfoWrapper>
                    <Font Name>{Data[animal][id].info}</Font>
                </InfoWrapper>

            </Wrapper>
            
        </Container>
        <Comment />


        
        <FooterWrapper>
            <Footer />
        </FooterWrapper>
        </>
    )
}
export default OrderPage