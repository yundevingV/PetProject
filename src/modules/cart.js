// Actions
export const ADD = "ADD"
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const DELETE = "DELETE"

export const add = (id,name,price,amount,src,category,animal) => {
    return {
        type: ADD,
        id,
        name,
        price,
        amount,
        src,
        category,
        animal
    }
}

// Action Creator
export const increment = (item) => {
    return {
        type: INCREMENT,
        item
    };
}

export const decrement = (item) => {
    return {
        type: DECREMENT,
        item
    };
}

export const deletion = (item) => {
    return {
        type : DELETE,
        item
    }
}
// 초기값 설정
const initialState = {
    list : [],
    total : 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        /*장바구니 추가 */
        case ADD:

            const cartItem = state.list.find((item) => item.name === action.name)
            
            if(cartItem){
                return {
                    list : [...state.list],
                    total : state.total
                }
            }
            else{
                return {
                    list : [...state.list ,
                        {
                            id : action.id,
                            name : action.name,
                            price : action.price,
                            src : action.src,
                            amount : action.amount ,
                            category : action.category,
                            animal : action.animal,
                        
                        }
                    ],
                    total : state.total + (action.price * action.amount)
                };
            }
            
        /*장바구니 페이지에서 갯수추가*/
        case INCREMENT:
            
            const plus = state.list.find((item) => item.name === action.item.name )
            
            if (plus) {
                plus.amount +=1
                return {
                    list : [...state.list],
                    total : state.total + plus.price
                };
            }
            else {
                return {
                    list : [...state.list],
                    total : state.total 
                }
            };

            /*장바구니 페이지에서 갯수감소*/
            case DECREMENT : {

                const minus = state.list.find((item) => item.name === action.item.name)
            
                if (minus) {
                    if (minus.amount > 1){
                        minus.amount -=1
                        return {
                            list : [...state.list],
                            total : state.total - minus.price
                        };
                    }
                }

                else {
                    return {
                        list : [...state.list],
                        total : state.total 
                    }
                };
            }

            /*장바구니 페이지에서 삭제하는 로직*/
            case DELETE : {
                console.log(state.list)
                return {
                    list : [...state.list,],
                    list : state.list.filter((item) => item.id !== action.item.id),
                    total : state.total - (action.item.price * action.item.amount)
                }
            }

        default:
            return state;
    }
}