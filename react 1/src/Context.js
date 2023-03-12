import React, { useState, useContext, createContext } from 'react';
import Hero from './context api/Hero';
import Navbar from './context api/Navbar';
import Usecard from './context api/Usecard';


export const myContext = createContext();


function Context() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    
    function myName(event){
        setName(event.target.value)
    }
    function myColor(event){
        setColor(event.target.value)
    }
  return (
    <myContext.Provider value = {{name , color}}>
    
    <Navbar/>

      <form>
        <input type={"text"}
         placeholder = "enter user name" 
         value={name}
         onChange = {myName}/>

         <input type={"text"}
          placeholder = "enter color name"
          value={color} 
         onChange = {myColor}/>
      </form>
        <br/>
        <Hero/>
        <Usecard/>
    </myContext.Provider>
  )
}

export default Context