import React  from 'react';
import Dog from '../json/Dog.json'
import styled from 'styled-components';



const Frame = styled.div`
width : 10rem;
height : 15rem;
background: #9ED6C0;
display: inline-block;
margin-left: 2rem;
vertical-align: top;
border-radius: 0.5rem;
padding: 1rem;
`

const Img = styled.img`
width: 10rem;
height: 5rem;
margin : auto 0;
`

function Menu({item}){
    return(
        <Frame>
            <Img src={item.src} alt='X' /> 
            <hr />
            <b>{item.name}</b> <br />
            <span>({item.price})</span>
        </Frame>
    )
}

function DogMenuMain() {

    return(
        <div>
            {Dog.DogItems.map(item =>(
                <Menu item={item} key={item.id} />
        ))}

        </div>
    )
}

export default DogMenuMain