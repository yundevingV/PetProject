import React  ,{useState} from 'react';
import Dog from '../json/Dog.json'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Frame = styled.div`
width : 10rem;
height : 15rem;
background: #9ED6C0;
display: inline-block;
margin-left: 2rem;
vertical-align: top;
border-radius: 0.5rem;
padding: 1rem;
position : relative;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const Img = styled.img`
width: 10rem;
height: 5rem;
margin : auto 0;
text-decoration : none;
`
const StyledLink = styled(Link)`
text-decoration : none;
color : #FFFFFF;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color : #FFFFFF;

    }
`
const B = styled.b`
&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color : #FFFFFF;
    }
`
const Span = styled.span`
color : #f12356;
&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color : #f12356;
    }
`

function Menu({item}){
    const [DogData] = useState(Dog)

    return(
        <StyledLink to={`/OrderPage/${item.id}`}>
            <Frame>
                <Img src={item.src} alt='X' /> 
                <hr />
                <B>{item.name}</B> <br />
                <Span>({item.price})</Span>
            </Frame>
        </StyledLink>
        
    )
}

function DogMenuMain({category}) {

    return(
        <div>
            {category === '' ?
            Dog.DogItems
            .map(item =>(
                <Menu item={item} key={item.id} />
        )) :
            Dog.DogItems
            .filter((item) => item.category === `${category}`)
            .map(item =>(
                <Menu item={item} key={item.id} />
        ))}

        </div>
    )
}

export default DogMenuMain