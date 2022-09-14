import React  from 'react';
import Dog from '../json/Dog.json'
import styled from 'styled-components';
import Swal from "sweetalert2";

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
`
const FrameButton = styled.button`
width: 100%;
position: absolute;
bottom : 0%;
left : 0%;
`
const Img = styled.img`
width: 10rem;
height: 5rem;
margin : auto 0;
`

const Order = (item) => {
    Swal.fire({
        title: "확인",
        html: `
        <b>'${item.name}'</b> 을 주문합니다.
        <br>
        계속 해서 주문하시겠습니까 ?
        `,
        showCancelButton: true,
        confirmButtonText: "네, 계속해서 주문하겠습니다.",
        cancelButtonText : "아니오. 주문을 마치겠습니다."
    }).then((res) => {
        /* Read more about isConfirmed, isDenied below */
        if (res.isConfirmed) {
            console.log('a')
        }
        else{
            
            //취소
        }
    });
}


function Menu({item}){
    return(
        <Frame>
            <Img src={item.src} alt='X' /> 
            <hr />
            <b>{item.name}</b> <br />
            <span>({item.price})</span>
            <FrameButton 
                onClick={()=>Order(item)}>
                주문하기
            </FrameButton>
        </Frame>
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