import React,{useState} from 'react';
import {Route , Routes} from 'react-router-dom'

import Home from "./pages/Home";
import Login from './pages/Login';
import Test from './pages/Test';
import SignUp from './pages/SignUp';
import OrderPage from './pages/OrderPage';

import Dog from './json/Dog.json'

function App() {
  /*Dog.json 불러오기 */
  const [DogData] = useState(Dog)
  console.log()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/OrderPage/:id' element={<OrderPage DogData={DogData} />} />


    </Routes>
  );
}

export default App;
