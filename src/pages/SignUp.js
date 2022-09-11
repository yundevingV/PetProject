import React , {useState} from "react";
import styled , {css} from "styled-components";

const ContainerWrapper = styled.div`
`
const Container = styled.div`
width : 40%;
height : 20%;
margin : 0 auto;
margin-top : 2rem ;
background : #FCCCCC;
`

const Title = styled.div`
font-weight : bold;
text-align : center;
font-size : 3rem;
padding-bottom: 3rem;
`

const Input = styled.input`
display : block;
height: 40px;
width: 90%;

margin: 0 auto;
::placeholder {
    font-weight : bold;
    font-size : 1rem;
}
`
const Wrapper = styled.div`
display: inline-block;

width: 100%;
margin-bottom : ${(props) => props.marginBottom};
`
const Button = styled.button`
margin: 0 auto;
display : block;
height : 3rem;
width : 70%;
font-weight : bold;

${(props) =>
    props.OverLap &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.Submit &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

${(props) =>
    props.Success &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;

    &:hover{
        color: #FFFFFF;
        background: #9ED6C0;
        border: 1px solid #FFFFFF;
        transition: 0.3s;
    }
    `}

`

function SignUp(){
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    return(

    <ContainerWrapper>
        <Container>
            <Title>
                회원가입
            </Title>
            <Wrapper marginBottom='2rem'>
                <Input 
                    placeholder='아이디를 입력하세요.'
                /> 
                <Wrapper>
                    <Button OverLap> 중복 확인하기 </Button>
                </Wrapper>
            </Wrapper>

            <Wrapper marginBottom='2rem'>
                <Input
                    marginBottom='3rem'
                    placeholder='비밀번호를 입력하세요.' 
                    onChange={onChange}
                    value={text}
                    />

            </Wrapper>
            
            <Wrapper marginBottom='2rem'>
                <Input
                    marginBottom='3rem'
                    placeholder='비밀번호를 다시 입력하세요.' 
                    onChange={onChange}
                    value={text}
                    />
            </Wrapper>

            <Wrapper marginBottom='2rem'>
                <Input marginBottom='3rem' placeholder='이름을 입력하세요.' />
            </Wrapper>

            <Wrapper marginBottom='2rem'>
                <Input marginBottom='3rem' placeholder='전화번호를 입력하세요.' />
                <Wrapper>
                    <Button Submit> 인증번호 보내기</Button>
                </Wrapper>
            </Wrapper>

            <Wrapper marginBottom='2rem'>
                <Input marginBottom='3rem' placeholder='인증번호 입력하세요.' />
            </Wrapper>

            <Wrapper marginBottom='2rem'>
                <Input marginBottom='3rem' placeholder='이메일을 입력하세요.' />
            </Wrapper>

            <Wrapper>
                <Button Success> 회원가입하기 </Button>
            </Wrapper>

        </Container>
    </ContainerWrapper>    
    )
}

export default SignUp