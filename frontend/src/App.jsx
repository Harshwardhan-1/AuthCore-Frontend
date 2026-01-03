import {Routes,Route} from 'react-router-dom';
import SignUpPage from "./components/SignUpPage"
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import ForgotPassword from './components/ForgotPassword';
import OtpVerify from './components/OtpVerify';
import {useState} from 'react';
function App() {

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
    </Routes>
    </>
  )
}

export default App
