import { combineReducers } from "redux";
import amount from "./amount";
import cart from "./cart";
// import한 리듀서 이름을 그대로 사용하는 경우
export default combineReducers({
  amount,
  cart
});