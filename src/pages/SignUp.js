import React , {useState , useCallback} from "react";
import styled , {css} from "styled-components";

const ContainerWrapper = styled.div`
`
const Container = styled.div`
width : 40%;
height : 20%;
margin : 0 auto;
margin-top : 2rem ;
background : #FFFFFF;
border : 3px solid #146132;
`

const Title = styled.div`
font-weight : bold;
text-align : center;
font-size : 3rem;
padding-bottom: 2rem;
`

const Input = styled.input`
color : block;
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
padding: 1rem;
width: 100%;
margin-bottom : ${(props) => props.marginBottom};

${(props) =>
    props.Submit &&
    css`
    padding: 0rem;
    width: 90%;
    display:flex;
    padding: 1rem;
    `}

${(props) =>
    props.Success &&
    css`
    padding: 0rem;
    `}

${(props) =>
    props.Button &&
    css`
    padding: 0rem;
    width: 50%;
    display:inline-block;
    `}

`

const Button = styled.button`
margin: 0 auto;
color : block;
height : 3rem;
width : 70%;
font-weight : bold;

${(props) =>
    props.OverLap &&
    css`
    color: #9ED6C0;
    background: #FFFFFF;
    border: 4px solid #9ED6C0;
    width: 25%;
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
    width: 25%;

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
    width: 100%;
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
const Message = styled.span`

color: ${props => props.color ? '#ff2727' : '#8f8c8b'};

`

function SignUp(){

    //비밀번호
    const [password,setPassword] = useState('')
    //비밀번호 오류메시지 저장
    const [passwordMessage, setPasswordMessage] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    //메시지 색깔
    const [messageColor,setMessageColor] = useState('false')
    const [messageConfirmColor,setMessageConfirmColor] = useState('false')

    // 비밀번호
    const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
        setMessageColor(true)

    } else {
        setPasswordMessage('안전한 비밀번호입니다.')
        setMessageColor(false)

    }
    }, [])

      // 비밀번호 확인
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호가 일치합니다.')
            setMessageConfirmColor(false)

        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요.')
            setMessageConfirmColor(true)

    }
    },
    [password])


    return(

    <ContainerWrapper>
        <Container>
            <Title>
                회원가입
            </Title>

            <Wrapper>
                <Input 
                    placeholder='아이디를 입력하세요.'
                /> 
                </Wrapper>

            <Wrapper >
                <Input
                    placeholder='비밀번호' 
                    onChange={onChangePassword}
                    passwordText='비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상'
                    />
            <br />
            {password.length > 0 && (
                <Message color={messageColor}>{passwordMessage}</Message>
            )}
            </Wrapper>
            
            <Wrapper>
                <Input
                    placeholder='비밀번호 확인' 
                    onChange={onChangePasswordConfirm}
                    passwordText=' '
                    />
            <br />
            {passwordConfirm.length > 0 && (
                <Message color={messageConfirmColor}>{passwordConfirmMessage}</Message>
            )}
            </Wrapper>

            <Wrapper >
                <Input placeholder='이름을 입력하세요.' />
            </Wrapper>

            <Wrapper Submit>
                <Input placeholder='전화번호를 입력하세요.' />
                    <Button Submit> 인증번호 보내기</Button>
            </Wrapper>

            <Wrapper >
                <Input  placeholder='인증번호 입력하세요.' />
            </Wrapper>

            <Wrapper >
                <Input placeholder='이메일을 입력하세요.' />
            </Wrapper>

            <Wrapper Success>
                <Button Success> 회원가입하기 </Button>
            </Wrapper>

        </Container>
    </ContainerWrapper>    
    )
}

export default SignUp