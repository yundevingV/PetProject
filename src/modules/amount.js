// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creator
export const increment = () => {
  return {
    type: INCREMENT,
  };
}
export const decrement = () => {
  return {
    type: DECREMENT,
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
        
      case DECREMENT:
        return {
          
          amount: state.amount - 1,
        };

      default:
        return state;
    }
}