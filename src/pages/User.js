import React from "react"
import Nav from "./Nav"

import UserData from '../json/User.json'

import { useSelector } from "react-redux";

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
    const id = useSelector((state) => state.login.id)
    console.log(id)
    return(
        <Wrapper>
            <NavContainer> 
                <Nav />
            </NavContainer>

            <UserWrapper>
                <UserContainer>
                    <UserListWrapper> 
                        {UserData.user
                            .filter((item)=> item.userId === id)
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