import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Coinpage from './components/Coinpage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-zinc-800 text-white font-sans min-h-screen'>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Homepage/>} />
    <Route path='/coins/:id' element={<Coinpage/>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App