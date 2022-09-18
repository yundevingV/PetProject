import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

let reducer1State = [];


export const reducer1 = (state = reducer1State, action) => {
  if (action.type === 'addObj') {
    let foundObjIdx = state.findIndex((obj) => {
      return obj.id === action.data.id
    });
    console.log('찾아진 객체 인덱스 : ' + foundObjIdx);
    if (foundObjIdx >= 0) {
      let _state = [...state];
      _state[foundObjIdx].qty++;
      return _state;
    } else {
      let _state = [...state];
      _state.push(action.data);
      console.log(_state);
      return _state;
    }
  } else if (action.type === 'plusQTY') {
    let _state = [...state];
    console.log(_state[action.data]);
    console.log(action.data);
    _state[action.data].qty++;
    return _state;
  } else if (action.type === 'minusQTY') {
    let _state = [...state];
    _state[action.data].qty--;
    return _state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({
  reducer1
}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />  
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();