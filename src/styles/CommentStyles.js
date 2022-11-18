import styled ,{css} from "styled-components";



export const CommentContainer = styled.div`
padding: 1rem;
`

export const TopContainer = styled.div`
padding : 0.5rem;
margin-left : 0rem;
margin-bottom : 1.5rem;
`

export const P = styled.span`
${(props) =>
    props.UserId &&
    css`
        color : #887674;
        
    `}

${(props) =>
    props.Content &&
    css`
        padding: 1rem;
        display: block;
        font-size: 1rem;
        
    `}
${(props) =>
    props.ReviewCount &&
    css`
        
        
    `}
`

export const ContentContainer = styled.div`

`

export const CommentInputWrapper = styled.div`
padding: 0.5rem;
`
export const CommentInput = styled.input`
margin: 0 auto;
width : 100%;
height: 5rem;

`


export const BottomContainer = styled.div`
padding: 0.5rem;
position: relative;
`

export const ImgWrapper = styled.div`

`
export const ImgInput = styled.input`
display : none;
`

export const ImgButton = styled.button`
width: 7rem;
height: 2rem;
border-radius : 0.2rem;
background: #20dba1;
border : 0px solid #ffffff;
`

export const ImgDeleteButton = styled.button`

`

export const AddButton = styled.button`
position: absolute;
right : 0%;

width: 7rem;
height: 2rem;
border-radius : 0.2rem;
background: #20dba1;
border : 0px solid #ffffff;

`
export const RecommendButton = styled.button`


color: #ff404f;
background: #ffffff;
border : 0px solid #ffffff;
`

export const DeleteButton = styled.button`


color: #ff404f;
background: #ffffff;
border : 0px solid #ffffff;
`

export const PreviewWrapper = styled.div`

`

export const PreviewContainer = styled.div`
height: 10vh;
width: 100vh;
display: inline-block;
`
export const Img = styled.img`
width: 10rem;
height: 10rem;
display: block;
padding: 1rem;

`

export const Hr = styled.hr`

`