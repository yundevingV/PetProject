import React from "react"
import Nav from "./Nav"

import userData from '../json/User.json'

import {Wrapper, 
        NavContainer,
        UserWrapper,
        UserContainer, UserListWrapper ,Span
        ,OrderListWrapper   } from '../styles/UserStyles'

function UserList({item}) {
    return(
        <>
            <Span Top> 개인정보 </Span>
            <hr />
            <Span> 이름 : {item.name}</Span>
            <Span> Phone : {item.phone}</Span>
            <Span> Email : {item.email}</Span>
            <hr />

            <Span Bottom> 주문목록 </Span>

            <OrderListWrapper>

            </OrderListWrapper>
        </>
    )

}

function User(){
    console.log(userData)
    // "userId" : "owanys",
    // "userPassword" : "qwer",
    // "name" : "윤성리",
    // "phone" : "010-9523-2451",
    // "email" : "dbstjd0222@naver.com"
    return(
        <Wrapper>
            <NavContainer> 
                <Nav />
            </NavContainer>

            <UserWrapper>
                <UserContainer>
                    <UserListWrapper> 
                        {userData.user
                            // 필터 코드는 접속중인 이아디와 자신의 아이디가 맞는지 체크
                            // .filter((item)=> item.id === `${loginId}`)}
                            .map((item)=> (
                                <UserList item={item} key={item.id} />
                            ))}
                    </UserListWrapper>
                </UserContainer>
            </UserWrapper>

        </Wrapper>
    )
}

export default User