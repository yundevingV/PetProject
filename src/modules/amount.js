
// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creator
export const increment = (price) => {
  return {
    type: INCREMENT,
    price
  };
}
export const decrement = (price) => {
  return {
    type: DECREMENT,
    price
  };
}

// 초기값 설정
const initialState = {
    amount: 1,
    
  };
  
  export default function counter(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          amount: state.amount + 1,
        };
        
      case DECREMENT : {
        if (state.amount <= 1 ) {
          return state
        }
        else{
        return {
          amount: state.amount - 1,
          };
        }
      }
      default:
        return state;
    }
}