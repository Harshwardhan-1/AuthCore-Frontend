import {Routes,Route, UNSAFE_useFogOFWarDiscovery} from 'react-router-dom';
import SignUpPage from "./components/SignUpPage"
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import ForgotPassword from './components/ForgotPassword';
import OtpVerify from './components/OtpVerify';
import NewPassword from './components/NewPassword';
import {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function App() {
  const navigate=useNavigate();
  useEffect(()=>{
    const fetch=async()=>{
      try{
  const response=await axios.get('https://authcore-backend-3.onrender.com/api/all/authCheck',{withCredentials:true});
  if(response.data.message=== 'Authorized'){
    navigate('/HomePage');
  }
    }catch(err){
      navigate('/signIn');
      console.log(err);
    }
    };
    fetch();
  },[navigate]);

  const [userData,setUserData]=useState(null);
  const [passwordData,setPasswordData]=useState(null);
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage />}></Route>
      <Route path='/signIn' element={<SignInPage setUserData={setUserData} />}></Route>
      <Route path='/HomePage' element={<HomePage userData={userData}/>}></Route>
      <Route path='/ForgotPassword' element={<ForgotPassword setPasswordData={setPasswordData}/>}></Route>
      <Route path='/OtpVerify' element={<OtpVerify passwordData={passwordData} /> }></Route>
      <Route path='/NewPassword' element={<NewPassword />}></Route>
    </Routes>
    </>
  )
}

export default App
