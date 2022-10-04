import React from "react";
import styled from "styled-components";

import git from '../img/github.svg'
import google from '../img/google.svg'

export const FooterWrapper = styled.div`
background-color: #1D1E29;
color : #FFFFFF;
font-size: 0.75rem;
height: 5rem;

position: relative;
`
export const Li = styled.li`

`
export const Ul = styled.ul`

`
export const Img = styled.img`
height: 1rem;
width: 1rem;
position: relative;
z-index: -1;
background-color: #FFFFFF;
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

                    <Img src={git} alt='x' />
                </Ul>
            </Li>
        </FooterWrapper>
    )
}

export default Footer