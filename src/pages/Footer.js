import React from "react";
import styled from "styled-components";

import git from '../img/github.svg'
import google from '../img/google.svg'

import {FooterContainer, Li, Ul, Img} from '../styles/FooterStyles'


function Footer(){
    return(
        <FooterContainer>
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
        </FooterContainer>
    )
}

export default Footer