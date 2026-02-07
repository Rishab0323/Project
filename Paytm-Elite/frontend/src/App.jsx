import { useState } from 'react'
// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Pages/signup'
import Signin from './Pages/signin'

function App() {
  
  return (
  <> 
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
