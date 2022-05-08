import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Coinpage from './components/Coinpage'
import Searchpage from './components/Searchpage'
import Login from './components/Authentication/Login'
import SignUpLogIn from './components/Authentication/SignUpLogIn'
import SignUp from './components/Authentication/SignUp'
import WithoutNav from './components/WithoutNav'
import WithNav from './components/WithNav'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-zinc-900 text-white font-sans min-h-screen'>
    <Routes>
    <Route element={<WithoutNav />}>
        
      <Route path="/signuplogin" element={<SignUpLogIn />} >
      <Route index element={<Login />} />
      <Route path="/signuplogin/signup" element={<SignUp />} />
      </Route>
      
    </Route>
     <Route element={<WithNav />}>
    <Route path='/' exact element={<Homepage/>} />
    <Route path='/login' exact element={<Login/>} />
    <Route path='/coins/:id' element={<Coinpage/>} />
    <Route path='/search/:name' element={<Searchpage/>} />
    </Route>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App