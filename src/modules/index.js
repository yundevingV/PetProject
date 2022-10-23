import { combineReducers } from "redux";
import cart from "./cart";
import category from './category'
import  handle from "./handle";
// import한 리듀서 이름을 그대로 사용하는 경우
export default combineReducers({
  cart,
  category,
  handle
});