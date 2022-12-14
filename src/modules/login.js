import UserData from "../json/User.json"

export const LOGIN = "LOGIN"
export const HANDLECHANGEID = 'HANDLECHANGEID'
export const HANDLECHANGEPASSWORD = 'HANDLECHANGEPASSWORD'
export const LOGOUT = "LOGOUT"

export const loginn = (id,password) => {
    return{
        type : LOGIN,
        id,
        password
    }
}

export const handleChangeId = (actionId) => {
    return {
        type : HANDLECHANGEID,
        actionId
    }
}
export const handleChangePassword = (actionPassword) => {
    return {
        type : HANDLECHANGEPASSWORD,
        actionPassword
    }
}

export const logout = () => {
    return{
        type : LOGOUT,
    }
}

const initialState = {
    id : '',
    password : '',
    loginStatus : false,
    name : ''
}


export default function counter(state = initialState, action) {

    switch(action.type) {
        case LOGIN :

            const correctIdFunc = (id) => {
                    if (id.userId === action.id) return true
            }    
            
            const correctIndex = UserData.user.findIndex(correctIdFunc)

            const correct = (index) => {
                if(UserData.user[index].userPassword === action.password)
                    return true
            }
            console.log(correctIndex)
            if (correctIndex !== -1) {
                
            } else {
                alert('아이디를 확인해주세요.')
            }
            
            console.log(correct(correctIndex))

            if (correct(correctIndex)) {
                
                return {    
                    id : action.id,
                    password : action.password,
                    loginStatus : true,
                    name : UserData.user[correctIndex].name
                } 
            }
            else {
                if (state.loginStatus === true) {
                    return {
                        id : action.id,
                        password : action.password,
                        loginStatus : state.loginStatus,
                        name : state.name
                    }
                } else { 
                    return {    
                        id : action.id,
                        password : action.password,
                        loginStatus : false,
                        name : state.name
                        }
                    } 
            }


        case HANDLECHANGEID : 
            return {
                id : action.actionId,
                password : state.password,
                loginStatus : state.loginStatus,
                name : state.name
            }
        case HANDLECHANGEPASSWORD :
            return {
                id : state.id,
                password : action.actionPassword,
                loginStatus : state.loginStatus,
                name : state.name
            }
        case LOGOUT :
            return {
                id : '',
                password : '',
                loginStatus : false,
                name : ''

            }
        default :
            return {
                id : state.id,
                password : state.password,
                loginStatus : state.loginStatus,
                name : state.name
            }
    }
}