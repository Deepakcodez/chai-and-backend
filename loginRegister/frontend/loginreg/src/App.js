import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './component/register/Home';
import Login from './component/register/Login';
import Register from './component/register/Register';
import { useState } from 'react';

function App() {

  const [loginUser,setLoginUser] = useState({})
  console.log('>>>>>>>>>>>', loginUser)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' 
      element={
          <Home  info={loginUser}/>

         
      }/>
      <Route exact path='/login' 
       
       element={<Login setLoginUser={setLoginUser} msg={"msg"} />}/>

      <Route exact path='/register' element={<Register   />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
