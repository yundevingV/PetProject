import React from 'react';
import {Route , Routes} from 'react-router-dom'

import Home from "./pages/Home";
import Login from './pages/Login';
import Test from './pages/Test';
import SignUp from './pages/SignUp';
import OrderPage from './pages/OrderPage';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import User from './pages/User'

import DogData from './json/Dog.json'
import CatData from './json/Cat.json'

import GlobalStyle from './fonts/GlobalStyle'

function App() {
  /*Dog.json 불러오기 */
  
  const Data = {...DogData, ...CatData }

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Cart' element={<Cart  />} />
      <Route path='/User' element={<User  />} />

      <Route path='/Pay' element={<Pay  />} />

      <Route path='/OrderPage/:animal/:id' element={<OrderPage data={Data} />} />

    </Routes>
    </>
  );
}

export default App;
