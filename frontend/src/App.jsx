import {Routes,Route} from 'react-router-dom';
import SignUpPage from "./components/SignUpPage"
import SignInPage from './components/SignInPage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage />}></Route>
      <Route path='/signIn' element={<SignInPage />}></Route>
    </Routes>
    </>
  )
}

export default App
