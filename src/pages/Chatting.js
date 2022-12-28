import React, { useState } from "react";
import styled ,{css} from 'styled-components';
import EnvelopeSolid from '../img/envelope-solid.svg'
import ChatLog from '../json/ChatLog.json'

function ChattingLog({item}) {
    return(
        <>
        
            {item.from === 'master' 
            ? 
            <ChattingLogWrapper>
                <UserName master>
                    {item.from}
                </UserName>
                <ChattingContent master>
                    {item.content} 
                </ChattingContent>
            </ChattingLogWrapper>
            :
            <ChattingLogWrapper customer>
                {/* <UserName customer>
                    {item.from}
                </UserName> */}
                <ChattingContent customer>
                    {item.content} 
                </ChattingContent>
            </ChattingLogWrapper>
            }

            
            
        </>
    )
}

function Chatting() {

    const [chatting, isOpenChatting] = useState(false)

    const toggleChatting = () => {
        chatting === false ? isOpenChatting(true) : isOpenChatting(false);
        
    }; 

    return(
    <>
        <Wrapper>
            

                {chatting === false 
                ? 
                <Button onClick={()=>toggleChatting()}>
                    <Img src={EnvelopeSolid} alt='x'></Img> 
                </Button>

                :
                <ChattingRoomBackground>
                    <ChattingRoom> 
                        
                        <Title>상담 봇</Title>
                        <DeleteButton onClick={()=>toggleChatting()}>
                            X
                        </DeleteButton>
                        <Hr />

                        <ChattingRoomList>
                            {ChatLog.test
                            .map(item =>(
                                <ChattingLog item={item} key={item.id} />
                            ))}
                        </ChattingRoomList>
                    </ChattingRoom>
                </ChattingRoomBackground>
                }
                


        </Wrapper>
    <p>
        {chatting === true ? 'true' : 'false'}
    </p>
    </>
    )
}

const Wrapper = styled.div`
`
const Title = styled.span`
color : white;
font-weight : 1000;
font-size:1.5rem;
padding: 1rem;

`
const Button = styled.button`
border: 0rem;
border-radius: 10rem;
background: #141b07;
position : fixed;
top : 50%;
right : 20%;
`

const Img = styled.img`
padding : 1rem;
`

// 채팅룸 관련 스타일드 컴포넌트

const ChattingRoomBackground = styled.div`
/* background: #192935;
width : 100%;
height : 100%;
opacity : 1; */

`

const ChattingRoom = styled.div`
background: #192935;
width : 50%;
height : 70%;

/* 센터배치 */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

z-index : 999;
`

const DeleteButton = styled.button`
width: 7%;
height: 7%;
float : right;

border : 0rem;
background: #192935;
color : #FFFFFF;

`
const Hr = styled.hr`
position: relative;
top:0%;
width: 100%;
`


const ChattingRoomList = styled.div`
display: block;
`
const ChattingContent = styled.span`

${(props) =>
    props.master &&
    css`
    background: yellow;
    `}

${(props) =>
    props.customer &&
    css`
    background: green;
    float: right;

    `}
`

const UserNameWrapper = styled.div`
padding : 0.1rem;
`

const UserName = styled.div`
color : white;

/* 받은 메시지는 왼쪽 */

/* master는 상담사 customer 는 고객 */
${(props) =>
    props.master &&
    css`
    `}

${(props) =>
    props.customer &&
    css`
    float: right;
    `}

`

const ChattingLogWrapper = styled.div`
display: inline-block;

width: 100%;

margin-bottom : 1rem;

${(props) =>
    props.customer &&
    css`
        background: #000000;
    `}
`

export default Chatting
