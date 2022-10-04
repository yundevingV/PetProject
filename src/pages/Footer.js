import React from "react";
import styled from "styled-components";

import git from '../img/github.svg'
import google from '../img/google.svg'
export const FooterWrapper = styled.div`
background-color: #1D1E29;
color : #FFFFFF;
font-size: 0.75rem;
height: 7rem;

position: relative;
`
export const Li = styled.li`
padding : 1rem;
list-style: none;
display: inline-block;
`
export const Ul = styled.ul`

`
export const Img = styled.img`
height: 1rem;
width: 1rem;
position: relative;
margin-right: 0.5rem;
`


function Footer(){
    return(
        <FooterWrapper>
            <Li>
                BackEnd
                <Ul>
                    Name : 박용수
                </Ul>
                <Ul>
                    <a href="https://github.com/youngsoosoo" target="_blank">
                        <Img src={git} alt='x' />
                    </a>
                    <Img src={google} alt='x' />
                </Ul>
            </Li>

            <Li>
                FrontEnd
                <Ul>
                    Name : 이윤성
                </Ul>
                <Ul>
                    <a href="https://github.com/yundevingV" target="_blank">
                        <Img src={git} alt='x' />
                    </a>
                    <Img src={google} alt='x' />
                </Ul>
            </Li>
        </FooterWrapper>
    )
}

export default Footer