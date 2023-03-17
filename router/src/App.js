import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  About from './components/About'
import  Home from './components/Home'
import Navbar from './components/Navbar'
import Ordersummary from './components/Ordersummary'
import Error from './components/Error'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Ordersummary' element={<Ordersummary/>}/>
        {/* <Route path='/contact' element={<h1>hello</h1>}/> */}
        <Route path= '*' element={<Error/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
