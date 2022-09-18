import React,{useState} from 'react';
import {Route , Routes} from 'react-router-dom'

import Home from "./pages/Home";
import Login from './pages/Login';
import Test from './pages/Test';
import SignUp from './pages/SignUp';
import OrderPage from './pages/OrderPage';
import ShoppingList from './pages/ShoppingList';
import Cart from './pages/Cart';

import DogData from './json/Dog.json'
import CatData from './json/Cat.json'

function App() {
  /*Dog.json 불러오기 */
  
  const Data = {...DogData, ...CatData }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/ShoppingList' element={<ShoppingList />} />
      <Route path='/OrderPage/:animal/:id' element={<OrderPage data={Data} />} />
      <Route path='/Cart' element={<Cart />} />

    </Routes>
  );
}

export default App;
