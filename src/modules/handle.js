export const CHANGE = "CHANGE"

export const handle = (change) => {
    return {
        type: CHANGE,
        change
        
    }
}


const initialState = {
    word : '',
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        case CHANGE :
            return {
                word : action.change
            }
    default :
        return {
            word : action.change
        }
    }
}