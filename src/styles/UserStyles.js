import styled ,{css} from "styled-components";

export const Wrapper = styled.div`
margin: 0 auto;
height: 100vh;
`

export const NavContainer = styled.div`
position: relative;
display: block;
`
export const UserWrapper = styled.div`
position: relative;
background: #f8efed;
height: 100vh;
`

export const UserContainer = styled.div`
position: relative;
top : 10vh;
margin: 0 auto;
height: 70vh;
width: 80vh;
background: #FFFFFF;
`
export const UserListWrapper = styled.div`
padding: 1rem;
`

export const OrderListWrapper = styled.div`
height: 10rem;
width: 70vh;
`

export const Span = styled.div`
margin : 2rem;
${(props) =>
    props.Top &&
    css`
        margin : 0rem;
        text-align : center;
    `}
${(props) =>
    props.Bottom &&
    css`
        margin : 0rem;
        text-align : center;
    `}
`