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
    password : ''
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        case LOGIN :
            return {
                id : action.id,
                password : action.password
            }
        case HANDLECHANGEID : 
            return {
                id : action.actionId,
                password : state.password
            }
        case HANDLECHANGEPASSWORD :
            return {
                id : state.id,
                password : action.actionPassword
            }
        case LOGOUT :
            return {
                id : '',
                password : ''
            }
        default :
            return {
                id : state.id,
                password : state.password
            }
    }
}