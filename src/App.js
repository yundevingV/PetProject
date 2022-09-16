import React,{useState} from 'react';
import {Route , Routes} from 'react-router-dom'

import Home from "./pages/Home";
import Login from './pages/Login';
import Test from './pages/Test';
import SignUp from './pages/SignUp';
import OrderPage from './pages/OrderPage';

import Data from './json/Data.json'

function App() {
  /*Dog.json 불러오기 */
  
  const [data] = useState(Data)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/OrderPage/:animal/:id' element={<OrderPage data={data} />} />

    </Routes>
  );
}

export default App;
