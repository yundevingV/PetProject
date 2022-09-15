import React,{useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import styled ,{css} from "styled-components";

const Container = styled.div`
width: 70%;
height: 100%;
margin: 0 auto;
position: relative;
`
const Img = styled.img`
width: 100%;
height : 20rem;

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

const Button = styled.button`

`
function OrderPage(props){
    const {id} = useParams()
    const [num, setNum] = useState(parseInt(props.DogData.DogItems[id].amount)-1)
    const [totalPrice , setTotalPrice] = useState(parseInt(props.DogData.DogItems[id].price))

    let price = parseInt(props.DogData.DogItems[id].price)
    
    const Plus = () => {
        setNum(num => num +1)        
        setTotalPrice(price * (num+1))
    }
    useEffect (()=>{
        Plus()
    },[])

    const Minus = () => {
        num > 1 ? setNum(num -1) :
        setNum(num => num = 1)
        setTotalPrice(price * (num+1))
    }
    useEffect (()=>{
        Minus()
    },[])

    return(
        <Container>
            <ImgWrapper>
                <Img src={props.DogData.DogItems[id].src} alt='X' />
            </ImgWrapper>
            <NameWrapper>
                <Font Name>{props.DogData.DogItems[id].name}</Font>
            </NameWrapper>
            <PriceWrapper>
                <Font Price>{totalPrice} 원 </Font>
            </PriceWrapper>
            <NumWrapper>
                <Font Num>수량 : {num}</Font>
                <Button
                    onClick={()=>Plus()}>
                    +
                </Button>
                <Button
                    onClick={()=>Minus()}>
                    -
                </Button>
            </NumWrapper>
        </Container>
    )
}
export default OrderPage