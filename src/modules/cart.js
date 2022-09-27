import { act } from "react-dom/test-utils";

// Actions
export const ADD = "ADD"
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const add = (id,name,price,amount,src,category) => {
    return {
        type: ADD,
        id,
        name,
        price,
        amount,
        src,
        category

    }
    
}
// Actions


// Action Creator
export const increment = (name) => {
    return {
        type: INCREMENT,
        name,
    };
}

export const decrement = () => {
    return {
        type: DECREMENT,
        
    };
}
// 초기값 설정
const initialState = {
    list : [],
    total : 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ADD:
            const cartItem = state.list.find((item) => item.name === action.name)
            if(cartItem){}
            else{
            return {
                
                list : [...state.list ,
                    {
                        id : action.id,
                        name : action.name,
                        price : action.price,
                        src : action.src,
                        amount : action.amount,
                        category : action.category,
                    }
                ],
            };
            }

        case INCREMENT:
            
            console.log(action.name)
            const plus = state.list.find((item) => item.name === action.name )
            console.log(plus)
            
            if (plus) {
                plus.amount +=1
            }
            return {
                ...state,
                list : [...state.list],
                

            };
            
            case DECREMENT : {
            if (state.amount <= 1 ) {
                return {
                list : [...state.list],
                amount : state.list.amount +1
                }
            }
            else{
            return {
                list : [...state.list],

                amount: state.amount - 1,
                };
            }
            }
        default:
            return state;
    }
}