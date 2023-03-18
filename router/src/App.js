
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  About from './components/About'
import  Home from './components/Home'
import Navbar from './components/Navbar'
import Ordersummary from './components/Ordersummary'
import Error from './components/Error'
import Products from './components/Products'
import Features from './components/Features'
import New from './components/New'
import User from './components/User'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

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

        <Route path = '/Products' element={<Products/>}>
          <Route path='Features' element={<Features/>}/>
          <Route path='New' element={<New/>}/>
        </Route>
          
          <Route path ='/User' element = {<User/>}>
          <Route path ='/User/:UserId' element = {<UserDetails/>}/>
          <Route path='/User/Admin' element={<Admin/>}/>
          </Route>
          {/* <Route path ='/User/2' element = {<UserDetails/>}/>
          <Route path ='/User/3' element = {<UserDetails/>}/> */}

      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
