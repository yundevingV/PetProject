import React  from 'react';
import Data from '../json/Cat.json'
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Frame = styled.div`
width : 10rem;
height : 15rem;
background: #bcd67c;
display: inline-block;
margin-left: 2rem;
vertical-align: top;
border-radius: 0.5rem;
padding: 1rem;
position : relative;

border: 1px solid black;
box-shadow : 2px 3px 4px 0px black;

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

    return(
        <StyledLink to={`/OrderPage/${item.animal}/${item.id}`}>
            <Frame>
                <Img src={item.src} alt='X' /> 
                <hr />
                <B>{item.name}</B> <br />
                <Span>({item.price})</Span>
            </Frame>
        </StyledLink>
        
    )
}

function CatMenuMain({category,animal,word}) {

    return(
        <div>
            {category === 'cat' && animal === 'cat' ?
            Data.cat
            .filter((item) => item.animal === `${animal}`)
            .filter((item) => item.name.toLowerCase().includes(word) || word === undefined)
            .map(item =>(
                <Menu item={item} key={item.id} />
        )) :
            Data.cat
            .filter((item) => item.category === `${category}`
            && item.animal ===`${animal}`)
            .filter((item) => item.name.toLowerCase().includes(word) || word === undefined)
            .map(item =>(
                <Menu item={item} key={item.id} />
        ))}

        </div>
    )
}

export default CatMenuMain