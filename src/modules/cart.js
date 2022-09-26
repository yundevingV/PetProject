
// Actions
export const ADD = "ADD"


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

// 초기값 설정
const initialState = {
    list : [
        
    ]
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                list : [...state.list ,
                    {
                        id : action.id,
                        name : action.name,
                        price : action.price,
                        amount : action.amount,
                        src : action.src,
                        category : action.category

                    }
                ]
            };
        
        default:
            return state;
    }
}