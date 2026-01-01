import {Routes,Route} from 'react-router-dom';
import SignUpPage from "./components/SignUpPage"
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SignUpPage />}></Route>
    </Routes>
    </>
  )
}

export default App
