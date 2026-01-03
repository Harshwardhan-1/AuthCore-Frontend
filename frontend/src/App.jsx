import {Routes,Route} from 'react-router-dom';
import SignUpPage from "./components/SignUpPage"
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';
import {useState} from 'react';
function App() {

  const [userData,setUserData]=useState({});
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage />}></Route>
      <Route path='/signIn' element={<SignInPage setUserData={setUserData} />}></Route>
      <Route path='/HomePage' element={<HomePage data={userData}/>}></Route>
    </Routes>
    </>
  )
}

export default App
