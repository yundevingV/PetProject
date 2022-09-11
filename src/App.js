import {Route , Routes} from 'react-router-dom'

import Home from "./pages/Home";
import Login from './pages/Login';
import Test from './pages/Test';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Test' element={<Test />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
}

export default App;
