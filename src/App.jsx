
import './App.css'
import Login from './login'
import Home from './home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      

    </div>

  )
}

export default App
